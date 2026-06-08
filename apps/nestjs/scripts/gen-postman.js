#!/usr/bin/env node
/**
 * Fetches the OpenAPI spec from the running NestJS server,
 * converts it to a Postman v2.1 collection, and writes the
 * result to postman-collection.json in the app root.
 *
 * Usage:
 *   BASE_URL=https://xxx.daytona.app node scripts/gen-postman.js
 *   node scripts/gen-postman.js https://xxx.daytona.app
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const Converter = require('openapi-to-postmanv2');

const PREVIEW_URL_FILE = path.join(__dirname, '..', '.preview-url');

const BASE_URL =
  process.argv[2] ||
  process.env.BASE_URL ||
  (fs.existsSync(PREVIEW_URL_FILE)
    ? fs.readFileSync(PREVIEW_URL_FILE, 'utf8').trim()
    : null) ||
  'http://localhost:3001';

const OUT_FILE = path.join(__dirname, '..', 'postman-collection.json');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`JSON parse failed: ${e.message}\nBody: ${data.slice(0, 200)}`));
          }
        });
      })
      .on('error', reject);
  });
}

async function main() {
  console.log('Fetching OpenAPI spec from http://localhost:3001/api-json ...');
  const spec = await fetchJson('http://localhost:3001/api-json');

  await new Promise((resolve, reject) => {
    Converter.convert(
      { type: 'string', data: JSON.stringify(spec) },
      { folderStrategy: 'Tags', requestParametersResolution: 'Example' },
      (err, result) => {
        if (err || !result.result) {
          return reject(new Error(String(err || result.reason || 'Conversion failed')));
        }

        const collection = result.output[0].data;

        // Inject real base URL as the default value of the baseUrl variable
        if (!collection.variable) collection.variable = [];
        const existing = collection.variable.find((v) => v.key === 'baseUrl');
        if (existing) {
          existing.value = BASE_URL;
        } else {
          collection.variable.push({ key: 'baseUrl', value: BASE_URL, type: 'string' });
        }

        // Replace any hardcoded localhost:3001 in request URLs
        const raw = JSON.stringify(collection, null, 2).replace(
          /http:\/\/localhost:3001/g,
          BASE_URL,
        );

        fs.writeFileSync(OUT_FILE, raw);
        const itemCount = (collection.item || []).length;
        console.log(`Postman collection written → ${OUT_FILE}`);
        console.log(`Base URL : ${BASE_URL}`);
        console.log(`Folders  : ${itemCount}`);
        resolve();
      },
    );
  });
}

main().catch((e) => {
  console.error('gen-postman failed:', e.message);
  process.exit(1);
});

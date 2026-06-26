import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SWAGGER_CUSTOM_CSS, SWAGGER_THEME_JS } from './swagger-theme';
import { execFile } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableShutdownHooks();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'NestJS API — Docs',
    customCss: SWAGGER_CUSTOM_CSS,
    customJsStr: SWAGGER_THEME_JS,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      displayRequestDuration: true,
      persistAuthorization: true,
      tryItOutEnabled: true,
    },
  });

  const port = parseInt(process.env.PORT ?? '3001', 10);

  const shutdown = async () => {
    await app.close();
    process.exit(0);
  };
  process.once('SIGTERM', shutdown);
  process.once('SIGINT', shutdown);

  await app.listen(port);

  // Regenerate postman-collection.json every time the server starts.
  // Runs after listen() so /api-json is already available.
  const scriptPath = path.join(__dirname, '..', 'scripts', 'gen-postman.js');
  const previewUrlFile = path.join(__dirname, '..', '.preview-url');
  const baseUrl =
    process.env.BASE_URL ||
    (fs.existsSync(previewUrlFile)
      ? fs.readFileSync(previewUrlFile, 'utf8').trim()
      : null) ||
    `http://localhost:${port}`;

  execFile(
    'node',
    [scriptPath],
    { env: { ...process.env, BASE_URL: baseUrl } },
    (err) => {
      if (err) console.error('[gen-postman] failed:', err.message);
      else console.log('[gen-postman] postman-collection.json updated');
    },
  );
}
bootstrap();

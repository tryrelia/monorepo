/**
 * Professional Swagger UI theme — light + dark with a persisted toggle.
 *
 * Injected into SwaggerModule.setup() via `customCss` / `customJsStr`.
 * The whole theme is driven by CSS custom properties scoped to
 * `:root` (light) and `:root[data-theme="dark"]` (dark), so a single
 * attribute flip on <html> switches every surface at once.
 */

export const SWAGGER_CUSTOM_CSS = `
/* ── Theme tokens ──────────────────────────────────────────────────────── */
:root {
  --sg-bg:        #f6f7f9;
  --sg-surface:   #ffffff;
  --sg-surface-2: #f1f3f6;
  --sg-border:    #e4e8ee;
  --sg-text:      #1b2330;
  --sg-muted:     #61708a;
  --sg-accent:    #4f46e5;
  --sg-accent-soft: rgba(79, 70, 229, 0.10);
  --sg-shadow:    0 1px 3px rgba(20, 30, 50, 0.06), 0 6px 24px rgba(20, 30, 50, 0.05);
  --sg-radius:    12px;
  --sg-get:    #2f80ed;
  --sg-post:   #12a87a;
  --sg-put:    #e1932a;
  --sg-delete: #e23d3d;
  --sg-patch:  #7c5cff;
}
:root[data-theme="dark"] {
  --sg-bg:        #0e1016;
  --sg-surface:   #161a22;
  --sg-surface-2: #1d222c;
  --sg-border:    #283040;
  --sg-text:      #e6e9ef;
  --sg-muted:     #93a0b5;
  --sg-accent:    #8b93ff;
  --sg-accent-soft: rgba(139, 147, 255, 0.14);
  --sg-shadow:    0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 30px rgba(0, 0, 0, 0.35);
  --sg-get:    #5b9bf5;
  --sg-post:   #2bc295;
  --sg-put:    #f0ad4e;
  --sg-delete: #f06262;
  --sg-patch:  #a98bff;
}

/* ── Page shell ────────────────────────────────────────────────────────── */
html, body { background: var(--sg-bg) !important; transition: background .25s ease; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
.swagger-ui { color: var(--sg-text); }
.swagger-ui .topbar { display: none; }

.swagger-ui .wrapper { max-width: 1180px; padding: 0 24px; }

/* ── Header / info block ───────────────────────────────────────────────── */
.swagger-ui .information-container {
  background: var(--sg-surface);
  border: 1px solid var(--sg-border);
  border-radius: var(--sg-radius);
  box-shadow: var(--sg-shadow);
  padding: 26px 30px;
  margin: 28px 0 22px;
}
.swagger-ui .info { margin: 0; }
.swagger-ui .info .title {
  color: var(--sg-text);
  font-weight: 700;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 10px;
}
.swagger-ui .info .title small {
  background: var(--sg-accent);
  border-radius: 999px;
  padding: 2px 10px;
}
.swagger-ui .info .title small pre { color: #fff; font-weight: 600; }
.swagger-ui .info .title small.version-stamp { background: var(--sg-accent); }
.swagger-ui .info .description,
.swagger-ui .info p,
.swagger-ui .info li { color: var(--sg-muted); }
.swagger-ui .info a { color: var(--sg-accent); }

/* ── Servers / scheme bar ──────────────────────────────────────────────── */
.swagger-ui .scheme-container {
  background: var(--sg-surface);
  border: 1px solid var(--sg-border);
  border-radius: var(--sg-radius);
  box-shadow: var(--sg-shadow);
  margin: 0 0 26px;
  padding: 18px 24px;
}
.swagger-ui .scheme-container .schemes-title,
.swagger-ui select { color: var(--sg-text); }

/* ── Tag sections ──────────────────────────────────────────────────────── */
.swagger-ui .opblock-tag {
  color: var(--sg-text);
  border-bottom: 1px solid var(--sg-border);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.01em;
  padding: 14px 4px;
  margin: 8px 0 12px;
}
.swagger-ui .opblock-tag:hover { background: transparent; }
.swagger-ui .opblock-tag small { color: var(--sg-muted); font-weight: 400; }

/* ── Operation blocks ──────────────────────────────────────────────────── */
.swagger-ui .opblock {
  background: var(--sg-surface);
  border: 1px solid var(--sg-border);
  border-radius: 10px;
  box-shadow: none;
  margin: 0 0 12px;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.swagger-ui .opblock:hover { box-shadow: var(--sg-shadow); }
.swagger-ui .opblock .opblock-summary {
  border-bottom: none;
  padding: 6px 10px;
}
.swagger-ui .opblock .opblock-summary-method {
  border-radius: 7px;
  font-weight: 700;
  min-width: 84px;
  text-shadow: none;
  box-shadow: none;
}
.swagger-ui .opblock-summary-path,
.swagger-ui .opblock-summary-path__deprecated {
  color: var(--sg-text);
  font-family: "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;
  font-weight: 600;
}
.swagger-ui .opblock-summary-description { color: var(--sg-muted); }

/* Per-method accents */
.swagger-ui .opblock.opblock-get    { border-color: color-mix(in srgb, var(--sg-get) 35%, var(--sg-border)); }
.swagger-ui .opblock.opblock-get    .opblock-summary-method { background: var(--sg-get); }
.swagger-ui .opblock.opblock-get    .opblock-summary { background: color-mix(in srgb, var(--sg-get) 7%, transparent); }
.swagger-ui .opblock.opblock-post   { border-color: color-mix(in srgb, var(--sg-post) 35%, var(--sg-border)); }
.swagger-ui .opblock.opblock-post   .opblock-summary-method { background: var(--sg-post); }
.swagger-ui .opblock.opblock-post   .opblock-summary { background: color-mix(in srgb, var(--sg-post) 7%, transparent); }
.swagger-ui .opblock.opblock-put    { border-color: color-mix(in srgb, var(--sg-put) 35%, var(--sg-border)); }
.swagger-ui .opblock.opblock-put    .opblock-summary-method { background: var(--sg-put); }
.swagger-ui .opblock.opblock-put    .opblock-summary { background: color-mix(in srgb, var(--sg-put) 7%, transparent); }
.swagger-ui .opblock.opblock-delete { border-color: color-mix(in srgb, var(--sg-delete) 35%, var(--sg-border)); }
.swagger-ui .opblock.opblock-delete .opblock-summary-method { background: var(--sg-delete); }
.swagger-ui .opblock.opblock-delete .opblock-summary { background: color-mix(in srgb, var(--sg-delete) 7%, transparent); }
.swagger-ui .opblock.opblock-patch  { border-color: color-mix(in srgb, var(--sg-patch) 35%, var(--sg-border)); }
.swagger-ui .opblock.opblock-patch  .opblock-summary-method { background: var(--sg-patch); }
.swagger-ui .opblock.opblock-patch  .opblock-summary { background: color-mix(in srgb, var(--sg-patch) 7%, transparent); }

/* Expanded body */
.swagger-ui .opblock .opblock-section-header {
  background: var(--sg-surface-2);
  box-shadow: none;
  border-radius: 8px;
}
.swagger-ui .opblock .opblock-section-header h4,
.swagger-ui .opblock-title,
.swagger-ui .opblock-description-wrapper p,
.swagger-ui .opblock-external-docs-wrapper p { color: var(--sg-text); }

/* ── Tabs ──────────────────────────────────────────────────────────────── */
.swagger-ui .tab li { color: var(--sg-muted); }
.swagger-ui .tab li.active { color: var(--sg-text); }

/* ── Tables (params + responses) ───────────────────────────────────────── */
.swagger-ui table thead tr th,
.swagger-ui table thead tr td {
  color: var(--sg-muted);
  border-bottom: 1px solid var(--sg-border);
}
.swagger-ui .parameters-col_name .parameter__name,
.swagger-ui .response-col_status,
.swagger-ui table tbody tr td { color: var(--sg-text); }
.swagger-ui .parameter__type { color: var(--sg-muted); }
.swagger-ui .response-col_description { color: var(--sg-text); }
.swagger-ui .responses-inner h4,
.swagger-ui .responses-inner h5 { color: var(--sg-text); }

/* ── Inputs ────────────────────────────────────────────────────────────── */
.swagger-ui input[type=text],
.swagger-ui input[type=password],
.swagger-ui input[type=email],
.swagger-ui input[type=number],
.swagger-ui textarea,
.swagger-ui select {
  background: var(--sg-surface);
  color: var(--sg-text);
  border: 1px solid var(--sg-border);
  border-radius: 8px;
  box-shadow: none;
}
.swagger-ui input:focus,
.swagger-ui textarea:focus,
.swagger-ui select:focus {
  border-color: var(--sg-accent);
  outline: 2px solid var(--sg-accent-soft);
}

/* ── Buttons ───────────────────────────────────────────────────────────── */
.swagger-ui .btn {
  border-radius: 8px;
  border: 1px solid var(--sg-border);
  color: var(--sg-text);
  box-shadow: none;
  font-weight: 600;
}
.swagger-ui .btn:hover { border-color: var(--sg-accent); }
.swagger-ui .btn.execute {
  background: var(--sg-accent);
  border-color: var(--sg-accent);
  color: #fff;
}
.swagger-ui .btn.authorize { color: var(--sg-accent); border-color: var(--sg-accent); }
.swagger-ui .btn.authorize svg { fill: var(--sg-accent); }
.swagger-ui .btn.cancel { color: var(--sg-delete); border-color: var(--sg-delete); }

/* ── Code / model blocks ───────────────────────────────────────────────── */
.swagger-ui .highlight-code,
.swagger-ui .microlight,
.swagger-ui .model-example,
.swagger-ui .body-param__example {
  background: var(--sg-surface-2) !important;
  border-radius: 8px;
}
.swagger-ui .microlight code,
.swagger-ui .renderedMarkdown code { color: var(--sg-text); }
.swagger-ui .model-box { background: var(--sg-surface-2); border-radius: 8px; }
.swagger-ui .model,
.swagger-ui .model-title { color: var(--sg-text); }
.swagger-ui section.models {
  background: var(--sg-surface);
  border: 1px solid var(--sg-border);
  border-radius: var(--sg-radius);
}
.swagger-ui section.models.is-open h4 { border-bottom: 1px solid var(--sg-border); }
.swagger-ui section.models h4 { color: var(--sg-text); }
.swagger-ui .prop-type { color: var(--sg-accent); }

/* ── Misc text fixes for dark mode ─────────────────────────────────────── */
.swagger-ui .opblock-summary-method,
.swagger-ui label,
.swagger-ui .parameter__name.required span { color: inherit; }
.swagger-ui .markdown p,
.swagger-ui .markdown li,
.swagger-ui .renderedMarkdown p { color: var(--sg-text); }
.swagger-ui svg.arrow { fill: var(--sg-muted); }
.swagger-ui .expand-methods svg, .swagger-ui .expand-operation svg { fill: var(--sg-muted); }

/* ── Theme toggle button ───────────────────────────────────────────────── */
#sg-theme-toggle {
  position: fixed;
  top: 16px;
  right: 20px;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid var(--sg-border);
  background: var(--sg-surface);
  color: var(--sg-text);
  box-shadow: var(--sg-shadow);
  font: 600 13px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: pointer;
  transition: transform .12s ease, border-color .15s ease, background .25s ease;
}
#sg-theme-toggle:hover { border-color: var(--sg-accent); transform: translateY(-1px); }
#sg-theme-toggle:active { transform: translateY(0); }
#sg-theme-toggle svg { width: 16px; height: 16px; }
`;

export const SWAGGER_THEME_JS = `
(function () {
  var KEY = 'sg-theme';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function systemPref() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function current() {
    try { return localStorage.getItem(KEY) || systemPref(); } catch (e) { return systemPref(); }
  }
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('sg-theme-toggle');
    if (btn) {
      var dark = theme === 'dark';
      btn.innerHTML = (dark ? SUN : MOON) + '<span>' + (dark ? 'Light' : 'Dark') + '</span>';
      btn.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
    }
  }
  function mount() {
    if (document.getElementById('sg-theme-toggle')) return;
    var btn = document.createElement('button');
    btn.id = 'sg-theme-toggle';
    btn.type = 'button';
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
    document.body.appendChild(btn);
    apply(current());
  }
  // Set theme ASAP to avoid flash, then mount the button once the DOM is ready.
  document.documentElement.setAttribute('data-theme', current());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
`;

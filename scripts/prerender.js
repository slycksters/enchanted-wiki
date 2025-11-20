// scripts/prerender.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DATA } from '../src/mappers/index.js';
import { getItemPath } from '../src/router/getItemPath.helper.js';
import { PAGE_LINKS } from '../src/constants/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const serverEntryPath = toAbsolute('dist/server/entry-server.js');
const { render } = await import(serverEntryPath);

const routesToPrerender = new Set();
PAGE_LINKS.forEach(link => routesToPrerender.add(link.path));
Object.values(DATA).flat().forEach(item => {
  const itemPath = getItemPath(item);
  if (itemPath && itemPath !== '/') routesToPrerender.add(itemPath);
});
routesToPrerender.add('/');

// --- REPLACE THIS ENTIRE LOOP ---
for (const url of routesToPrerender) {
  if (!url) continue;

  const { html: appHtml, helmet } = render(url);

  // Combine all helmet tags into one string.
  // react-helmet-next adds a "data-rh=true" attribute we can use.
  const headHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
  ].join('\n');

  // Replace the placeholder with the dynamic head content.
  const finalHtml = template
    .replace(`<!--app-html-->`, appHtml)
    .replace(`<!--helmet-head-outlet-->`, headHtml);

  const filePath = `dist/client${url === '/' ? '/index' : url}.html`;

  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true });
  fs.writeFileSync(toAbsolute(filePath), finalHtml);

  if (!filePath.endsWith('index.html')) {
    const dirPath = filePath.replace('.html', '');
    fs.mkdirSync(toAbsolute(dirPath), { recursive: true });
    fs.writeFileSync(toAbsolute(path.join(dirPath, 'index.html')), finalHtml);
  }

  console.log('prerendered:', url);
}
// --- END OF REPLACEMENT ---

console.log(`\nPrerendered ${routesToPrerender.size} pages.`);
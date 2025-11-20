// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DATA } from '../src/mappers/data.mapper.js';
import { getItemPath } from '../src/router/getItemPath.helper.js';
import { PAGE_LINKS } from '../src/constants/pageLinks.constant.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const homepage = 'https://www.slyckster.dev';

async function generateSitemap() {
  const allPaths = new Set();

  // 1. Add homepage
  allPaths.add('/');

  // 2. Add static overview pages
  PAGE_LINKS.forEach(link => allPaths.add(link.path));

  // 3. Add all dynamic item pages from your data
  Object.values(DATA).flat().forEach(item => {
    const itemPath = getItemPath(item);
    if (itemPath && itemPath !== '/') {
      allPaths.add(itemPath);
    }
  });

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...allPaths].map(route => `
        <url>
          <loc>${homepage}${route}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  const sitemapPath = toAbsolute('public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);

  console.log(`Sitemap with ${allPaths.size} URLs generated at ${sitemapPath}`);
}

generateSitemap();
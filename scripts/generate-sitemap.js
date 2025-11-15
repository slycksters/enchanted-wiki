import fs from 'fs';
import path from 'path';

// --- Data Imports ---
// We import the raw data objects directly.
import { ISLANDS } from '../src/data/islands.data.js';
import { ITEMS } from '../src/data/items.data.js';
import { MAGICS } from '../src/data/magics.data.js';
import { NPCS } from '../src/data/npcs.data.js';
import { PASSIVE_MAGICS } from '../src/data/passiveMagics.data.js';
import { PASSIVE_SKILLS } from '../src/data/passiveSkills.data.js';
import { RACES } from '../src/data/races.data.js';
import { SPECS } from '../src/data/specs.data.js';
import { TITLES } from '../src/data/titles.data.js';
import { TRAITS } from '../src/data/traits.data.js';
import { WEAPONS } from '../src/data/weapons.data.js';
import { WORLD_FEATURES } from '../src/data/worldFeatures.data.js';
import { TYPES } from '../src/data/enums/types.js';

// --- Configuration ---
const CNAME_PATH = path.resolve(process.cwd(), 'public/CNAME');
const CNAME = fs.readFileSync(CNAME_PATH, 'utf-8').trim();
const BASE_URL = `https://${CNAME}`;
const OUTPUT_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

// --- Helper Functions (Mirrored from your project) ---

/**
 * Extracts all values from an object of objects into an array.
 */
const extractValues = (obj) => (obj ? Object.values(obj) : []);

/**
 * Formats a display name into a URL-friendly slug.
 * Copied from `formatNameToUrl.helper.js`
 */
const formatNameToUrl = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

/**
 * Processes an array of items to add a unique 'slug' property to each.
 * Copied from `addUniqueSlugs.helper.js`
 */
const addUniqueSlugs = (itemsArray) => {
  if (!itemsArray) return [];
  const nameCounts = new Map();
  for (const item of itemsArray) {
    nameCounts.set(item.name, (nameCounts.get(item.name) || 0) + 1);
  }
  return itemsArray.map((item) => {
    const isDuplicate = nameCounts.get(item.name) > 1;
    const slug = isDuplicate
      ? `${formatNameToUrl(item.name)}-${item.id}`
      : formatNameToUrl(item.name);
    return { ...item, slug };
  });
};

/**
 * A simple pluralizer for category names.
 */
const pluralize = (word) => {
    if (word.endsWith('y')) {
        return word.slice(0, -1) + 'ies';
    }
    if (word.endsWith('s')) {
        return word;
    }
    return word + 's';
};

/**
 * REPLICATION of your `getItemPath` logic.
 * This is the core of the fix. It builds the URL for an item
 * exactly as your router does.
 */
const getItemUrl = (item) => {
  if (!item || !item.slug) return null;

  const getSubCategory = (subTypeOrType) => {
    if (!subTypeOrType || !subTypeOrType.name) return '';
    return formatNameToUrl(pluralize(subTypeOrType.name));
  };
  
  let pagePath;
  let subCategoryPath;

  switch (item.type.name) {
    case TYPES.item.name:
      subCategoryPath = getSubCategory(item.subType);
      pagePath = (item.subType?.name === 'Accessory') ? 'equips' : 'items';
      break;
    
    case TYPES.npc.name:
      pagePath = 'npcs';
      subCategoryPath = getSubCategory(item.subType);
      break;
      
    case TYPES.island.name:
      // Islands do not have a sub-category in your routing logic's likely implementation
      return `${BASE_URL}/islands/${item.slug}`;

    case TYPES.worldFeature.name:
      // World Features also have a simple path
      return `${BASE_URL}/world-features/${item.slug}`;

    case TYPES.weapon.name:
    case TYPES.title.name:
      pagePath = 'equips';
      subCategoryPath = getSubCategory(item.type);
      break;

    case TYPES.magic.name:
    case TYPES.passiveMagic.name:
    case TYPES.passiveSkill.name:
    case TYPES.race.name:
    case TYPES.spec.name:
    case TYPES.trait.name:
      pagePath = 'abilities';
      subCategoryPath = getSubCategory(item.type);
      break;
      
    default:
      return null;
  }

  if (!pagePath || !subCategoryPath) return null;
  return `${BASE_URL}/${pagePath}/${subCategoryPath}/${item.slug}`;
};


// --- Main Logic ---

function generateSitemap() {
  console.log('🚀 Starting sitemap generation with corrected URL logic...');

  // 1. Combine all data sources and add unique slugs.
  const allDataSources = [
    ...extractValues(ISLANDS),
    ...extractValues(ITEMS),
    ...extractValues(MAGICS),
    ...extractValues(NPCS),
    ...extractValues(PASSIVE_MAGICS),
    ...extractValues(PASSIVE_SKILLS),
    ...extractValues(RACES),
    ...extractValues(SPECS),
    ...extractValues(TITLES),
    ...extractValues(TRAITS),
    ...extractValues(WEAPONS),
    ...extractValues(WORLD_FEATURES),
  ];
  
  const allDataWithSlugs = addUniqueSlugs(allDataSources);

  // 2. Generate URLs for each individual data page using our replicated router logic.
  const dynamicUrls = allDataWithSlugs
    .map((item) => {
      const fullUrl = getItemUrl(item);
      if (!fullUrl) {
          console.warn(`⚠️ Could not generate URL for item: ${item.name} (Type: ${item.type?.name})`);
          return '';
      }
      return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  // 3. Define static and main category pages.
  const staticPages = [
    { url: '', priority: '1.0' }, // Homepage
    { url: 'islands', priority: '0.9' },
    { url: 'npcs', priority: '0.9' },
    { url: 'items', priority: '0.9' },
    { url: 'equips', priority: '0.9' },
    { url: 'abilities', priority: '0.9' },
    { url: 'world-features', priority: '0.9' },
  ];

  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}/${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  // 4. Combine into the final sitemap XML.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${dynamicUrls}
</urlset>`;

  // 5. Write the file.
  fs.writeFileSync(OUTPUT_PATH, sitemap);

  console.log(`✅ Sitemap generated successfully at ${OUTPUT_PATH}`);
  console.log(`🔗 Generated URLs for ${allDataWithSlugs.length} dynamic pages.`);
}

generateSitemap();
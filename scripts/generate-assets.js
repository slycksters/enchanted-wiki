import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
const SOURCE_DIRECTORIES = ['images', 'videos', 'logos'];
const ASSET_EXTENSIONS_REGEX = /\.(png|jpg|jpeg|gif|svg|mp4|webm)$/;
// --- END CONFIGURATION ---

const BASE_ASSETS_DIR = path.join(process.cwd(), 'src/assets');
const OUTPUT_JS_FILE = path.join(process.cwd(), 'src/assets/asset-manifest.js');

const toCamelCase = (str) => {
  const sanitized = str
    .replace(/\s*-\s*Copy/i, '')
    .replace(/[\s.]+/g, '-');
  return sanitized.replace(/-(\w)/g, (_, char) => char.toUpperCase());
};

console.log('Generating LAZY asset manifest...');

const fileHeader = `/*
 * ATTENTION: THIS IS AN AUTO-GENERATED FILE.
 * Do not modify it manually. Your changes will be overwritten.
 * Run "npm run generate-assets" to regenerate.
 */\n\n`;

let jsOutputContent = fileHeader + 'export const assets = {\n';

SOURCE_DIRECTORIES.forEach(dirName => {
  const currentDirPath = path.join(BASE_ASSETS_DIR, dirName);

  if (!fs.existsSync(currentDirPath)) {
    console.warn(`- Skipping: Directory not found at ${currentDirPath}`);
    return;
  }

  const dirKey = toCamelCase(dirName);
  jsOutputContent += `  ${dirKey}: {\n`;

  const items = fs.readdirSync(currentDirPath, { withFileTypes: true });

  items.forEach(item => {
    // Case 1: Sub-directory
    if (item.isDirectory()) {
      const categoryKey = toCamelCase(item.name);
      jsOutputContent += `    ${categoryKey}: {\n`;

      const categoryPath = path.join(currentDirPath, item.name);
      const files = fs.readdirSync(categoryPath);

      files.forEach(file => {
        if (ASSET_EXTENSIONS_REGEX.test(file)) {
          const fileKey = toCamelCase(path.parse(file).name);
          const importPath = `./${dirName}/${item.name}/${file}`;
          jsOutputContent += `      ${fileKey}: () => new URL('${importPath}', import.meta.url).href,\n`;
        }
      });
      jsOutputContent += `    },\n`;
    }
    // Case 2: File in top-level directory
    else if (item.isFile() && ASSET_EXTENSIONS_REGEX.test(item.name)) {
      const fileKey = toCamelCase(path.parse(item.name).name);
      const importPath = `./${dirName}/${item.name}`;
      jsOutputContent += `    ${fileKey}: () => new URL('${importPath}', import.meta.url).href,\n`;
    }
  });

  jsOutputContent += `  },\n`;
});

jsOutputContent += '};\n';

fs.writeFileSync(OUTPUT_JS_FILE, jsOutputContent, 'utf-8');

console.log(`✅ Asset manifest generated successfully at ${OUTPUT_JS_FILE}`);
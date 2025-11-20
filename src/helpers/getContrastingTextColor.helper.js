// src/helpers/getContrastingTextColor.helper.js

// Pre-defined map for CSS variable names to their hex values.
// This avoids needing the browser to compute them.
const colorVarToHex = {
  'var(--enchanted-rarity-common)': '#b0b0b0',
  'var(--enchanted-rarity-uncommon)': '#64e355',
  'var(--enchanted-rarity-rare)': '#55a9e3',
  'var(--enchanted-rarity-epic)': '#9f55e3',
  'var(--enchanted-rarity-legendary)': '#e3c655',
  'var(--enchanted-rarity-mythical)': '#e35555',
  'var(--enchanted-rarity-exotic)': '#55d8e3',
  'var(--enchanted-rarity-v2)': '#c81d1d',
  'var(--enchanted-rarity-secret)': '#82007f',
  'var(--enchanted-rarity-exclusive)': '#ff7118',
};

/**
 * A server-safe helper to get a contrasting text color.
 * It uses a direct hex-to-luminance calculation.
 * @param {string} color - The background color string (e.g., '#FFF', or a var() string from the map).
 * @returns {string} - Returns 'var(--enchanted-bg-primary)' (dark) or 'var(--enchanted-text-primary)' (light).
 */
export const getContrastingTextColor = (color) => {
  const defaultTextColor = 'var(--enchanted-text-primary)';
  if (!color) return defaultTextColor;

  let hex = color;
  // If the color is a CSS variable, look it up in our map.
  if (color.startsWith('var(')) {
    hex = colorVarToHex[color] || '#000000'; // Default to black if var not in map
  }

  // Sanitize hex color
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  if (hex.length !== 6) {
    return defaultTextColor;
  }

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance using the WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return dark text for light backgrounds, light text for dark backgrounds
  return luminance > 0.5 ? 'var(--enchanted-bg-primary)' : defaultTextColor;
};
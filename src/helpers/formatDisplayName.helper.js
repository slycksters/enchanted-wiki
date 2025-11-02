/**
 * Converts a camelCase or PascalCase string into a readable format.
 * Keeps uppercase abbreviations (DMG, HP, etc.) intact.
 * Example: "baseDMG" → "Base DMG"
 *          "maxHPBonus" → "Max HP Bonus"
 */
export function formatDisplayName(str) {
  if (!str) return '';

  // Insert space before capital letters or abbreviations
  const withSpaces = str
    // Put a space before sequences of uppercase letters preceded by lowercase
    .replace(/([a-z])([A-Z]+)/g, '$1 $2')
    // Also handle transitions like "HPBonus" → "HP Bonus"
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();

  // Capitalize the first character of the whole string
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

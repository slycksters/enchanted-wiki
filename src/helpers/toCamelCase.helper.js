export const toCamelCase = (str) => {
  if (!str) return '';

  return str
    // 1. Insert space before capital letters (handles 'CombatStyle' -> 'Combat Style')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // 2. Replace hyphens/underscores with spaces
    .replace(/[-_]/g, ' ')
    // 3. Remove any other non-alphanumeric characters
    .replace(/[^a-zA-Z0-9 ]/g, '')
    // 4. Lowercase everything to clear the slate
    .toLowerCase()
    // 5. Trim whitespace from ends
    .trim()
    // 6. Capitalize the first letter of every word EXCEPT the first one
    .replace(/\s+(.)/g, (match, letter) => letter.toUpperCase());
};
/**
 * Returns a pluralized version of a word based on the given quantity.
 *
 * Example:
 *   pluralize('apple', 1) → "apple"
 *   pluralize('apple', 3) → "apples"
 *
 * @param {string} text - The word to pluralize.
 * @param {number} quantity - The amount determining pluralization.
 * @returns {string} The word in singular or plural form.
 */
export const pluralize = (text, quantity) => {
  if (typeof text !== 'string' || !text.length) return text;
  if (quantity === 1) return text;

  // Basic English pluralization (simple 's' rule)
  if (text.endsWith('y') && !/[aeiou]y$/i.test(text)) {
    // e.g., "city" → "cities"
    return text.slice(0, -1) + 'ies';
  } else if (
    text.endsWith('s') ||
    text.endsWith('x') ||
    text.endsWith('z') ||
    /[ch|sh]$/.test(text)
  ) {
    // e.g., "bus" → "buses", "box" → "boxes"
    return text + 'es';
  } else {
    // Default: just add "s"
    return text + 's';
  }
};

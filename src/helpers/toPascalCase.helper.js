/**
 * Converts a string to PascalCase.
 * @param {string} str The string to convert.
 * @returns {string} The PascalCase string.
 */
export const toPascalCase = (str) => {
  if (!str) return '';

  const words = str.match(/[a-zA-Z0-9]+/g) || [];

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  );

  return capitalizedWords.join('');
}

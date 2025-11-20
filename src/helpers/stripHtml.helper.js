/**
 * Strips HTML tags from a string using a regular expression.
 * This version is "isomorphic" - it works in both Node.js and the browser
 * without relying on browser-only APIs like DOMParser.
 *
 * @param {string} html - The input string containing HTML.
 * @returns {string} The string with HTML tags removed.
 */
export const stripHtml = (html) => {
  if (!html) return '';
  // This regex finds any character between < and > and replaces it with an empty string.
  return html.replace(/<[^>]*>?/gm, '');
};
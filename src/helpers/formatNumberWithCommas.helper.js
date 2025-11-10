/**
 * Formats numeric values within a string by adding comma separators for better readability,
 * while preserving any non-numeric text or symbols.
 *
 * Examples:
 *   formatNumberWithCommas(500000) → "500,000"
 *   formatNumberWithCommas("1234567.89") → "1,234,567.89"
 *   formatNumberWithCommas("Gold: 500000") → "Gold: 500,000"
 *   formatNumberWithCommas("Price = 1200000 USD") → "Price = 1,200,000 USD"
 *   formatNumberWithCommas("abc123def") → "abc123def" (unchanged, not a standalone number)
 *
 * @param {number|string} value - The input containing numbers or text.
 * @returns {string} The formatted string with numbers comma-separated.
 */
export const formatNumberWithCommas = (value) => {
  if (value == null || value === '') return '0';

  // Convert non-string inputs to string for pattern matching
  const str = String(value);

  // Replace standalone numbers (including decimals) with formatted ones
  return str.replace(
    /\b\d{1,3}(?:\d{3})*(?:\.\d+)?\b/g,
    (match) => Number(match).toLocaleString('en-US')
  );
};

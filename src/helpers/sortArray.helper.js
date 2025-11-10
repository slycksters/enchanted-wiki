/**
 * Sorts an array of objects by a specified property and order.
 * If the property value starts with a number, it sorts by the numeric part first,
 * then alphabetically by the remaining text.
 *
 * @param {Array} data - The array to sort.
 * @param {string} property - The object key to sort by.
 * @param {'asc' | 'desc'} order - The sort order. Defaults to 'asc'.
 * @returns {Array} A new sorted array.
 */
export const sortArray = (data, property, order = 'asc') => {
  if (!Array.isArray(data) || !property) return data;

  const extractParts = (value) => {
    if (typeof value !== 'string') return { num: NaN, text: String(value ?? '') };
    const match = value.match(/^(\d+)\s*(.*)$/);
    return match
      ? { num: parseFloat(match[1]), text: match[2].trim() }
      : { num: NaN, text: value.trim() };
  };

  const sorted = [...data].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA == null) return 1;
    if (valueB == null) return -1;

    const { num: numA, text: textA } = extractParts(valueA);
    const { num: numB, text: textB } = extractParts(valueB);

    // Compare numeric part first (only if both have valid numbers)
    if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
      return numA - numB;
    }

    // If only one has a number, prioritize the one with a number
    if (!isNaN(numA) && isNaN(numB)) return -1;
    if (isNaN(numA) && !isNaN(numB)) return 1;

    // Compare text part (case-insensitive)
    return textA.localeCompare(textB, undefined, { sensitivity: 'base' });
  });

  return order === 'desc' ? sorted.reverse() : sorted;
};

/**
 * Sorts an array of objects by a specified property and order.
 * 
 * @param {Array} data - The array to sort.
 * @param {string} property - The object key to sort by.
 * @param {'asc' | 'desc'} order - The sort order. Defaults to 'asc'.
 * @returns {Array} A new sorted array.
 */
export const sortArray = (data, property, order = 'asc') => {
  if (!Array.isArray(data) || !property) return data;

  const sorted = [...data].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA == null) return 1;
    if (valueB == null) return -1;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
    }

    return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
  });

  return order === 'desc' ? sorted.reverse() : sorted;
};

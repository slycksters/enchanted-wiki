/**
 * Sorts an array of objects by their rarity level.
 * @param {Array} items - The array of objects to sort. Each object must have a `rarity` property referencing RARITIES.
 * @param {'asc' | 'desc'} order - The sorting order. Use 'asc' for ascending or 'desc' for descending.
 * @returns {Array} A new array sorted based on rarity id.
 */
export const sortByRarity = (items, order = 'asc') => {
  return [...items].sort((a, b) => {
    const idA = a.rarity.id;
    const idB = b.rarity.id;
    return order === 'asc' ? idA - idB : idB - idA;
  });
};

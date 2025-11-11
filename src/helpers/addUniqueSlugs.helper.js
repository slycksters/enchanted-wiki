import { formatNameToUrl } from '@helpers';

/**
 * Processes an array of items to add a unique 'slug' property to each.
 * Slugs for items with unique names will be just the formatted name.
 * Slugs for items with duplicate names will be 'formatted-name-id'.
 * @param {Array<Object>} itemsArray - The array of items to process. Each must have 'name' and 'id'.
 * @returns {Array<Object>} The new array with the 'slug' property added to each item.
 */
export const addUniqueSlugs = (itemsArray) => {
  if (!itemsArray) return [];

  const nameCounts = new Map();
  // First pass: count occurrences of each name
  for (const item of itemsArray) {
    nameCounts.set(item.name, (nameCounts.get(item.name) || 0) + 1);
  }

  // Second pass: generate slug based on whether the name is a duplicate
  return itemsArray.map((item) => {
    const isDuplicate = nameCounts.get(item.name) > 1;
    const slug = isDuplicate
      ? `${formatNameToUrl(item.name)}-${item.id}`
      : formatNameToUrl(item.name);

    return { ...item, slug };
  });
};
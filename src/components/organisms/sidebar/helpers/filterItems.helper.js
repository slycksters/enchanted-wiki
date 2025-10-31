/**
 * Filters an item based on a search key, including its sublist if it has one.
 *
 * @param {Object} item - The item to filter. Can have a `name` and optionally a `list` of sub-items.
 * @param {string} searchKey - The key to match against the item's name or its sublist names (case-insensitive).
 * @returns {Object|null} 
 *   - If the item matches the search key, returns the item.
 *   - If the item has a sublist, returns the item with only the matching sublist items.
 *   - Returns null if neither the item nor its sublist matches the search key.
 */
export const filterItems = (item, searchKey) => {
  // Case 1: Item has a sublist to filter
  if (item.list) {
    const filteredSubList = item.list.filter((sub) =>
      sub.name.toLowerCase().includes(searchKey)
    );

    // If the sublist has matches, return the parent item with the new filtered sublist
    if (filteredSubList.length > 0) {
      return { ...item, list: filteredSubList };
    }

    // Otherwise, this item is not a match
    return null;
  }

  // Case 2: Item is a simple parent item
  if (item.name.toLowerCase().includes(searchKey)) {
    return item;
  }

  // No match
  return null;
};

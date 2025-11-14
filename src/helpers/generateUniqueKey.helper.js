// Helper function to generate a guaranteed unique key for any data object.
  // Format: 'type-formattedname-id' (e.g., 'item-face-plaster-3')
  export const generateUniqueKey = (item) => {
    if (!item || !item.type || !item.name || !item.id) return null;
    const subType = item.subType?.name.toLowerCase().replace(/\s+/g, '-');
    const type = item.type.name.toLowerCase().replace(/\s+/g, '-');
    const name = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `${subType ?? type}-${name}-${item.id}`;
  };
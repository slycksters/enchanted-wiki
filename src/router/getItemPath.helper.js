
import {
  ABILITIES_CATEGORIES,
  EQUIPS_CATEGORIES,
  ISLANDS_CATEGORIES,
  ITEMS_CATEGORIES,
  NPCS_CATEGORIES,
} from '@components/pages/pageCategories.js';
import { BASE_PATH } from '@constants';
import { TYPES } from '@data';
import { formatNameToUrl } from '@helpers';

// Helper function to find which category an item belongs to
const findCategoryName = (item, categories) => {
  const category = categories.find((cat) =>
    cat.list.some(listItem => listItem.id === item.id && listItem.type.name === item.type.name)
  );
  return category ? formatNameToUrl(category.name) : null;
};

export const getItemPath = (item) => {
  if (!item || !item.slug) return '/';

  switch (item.type.name) {
    case TYPES.item.name: {
      const categoryName = findCategoryName(item, ITEMS_CATEGORIES);
      return `${BASE_PATH}/items/${categoryName}/${item.slug}`;
    }
    case TYPES.npc.name: {
      const categoryName = findCategoryName(item, NPCS_CATEGORIES);
      return `${BASE_PATH}/npcs/${categoryName}/${item.slug}`;
    }
    case TYPES.island.name: {
      const categoryName = findCategoryName(item, ISLANDS_CATEGORIES);
      return `${BASE_PATH}/islands/${categoryName}/${item.slug}`;
    }
    case TYPES.weapon.name:
    case TYPES.spec.name: {
      const categoryName = findCategoryName(item, EQUIPS_CATEGORIES);
      return `${BASE_PATH}/equips/${categoryName}/${item.slug}`;
    }
    case TYPES.magic.name:
    case TYPES.race.name:
    case TYPES.trait.name:
    case TYPES.passiveMagic.name:
    case TYPES.passiveSkill.name:
    case TYPES.title.name: {
      const categoryName = findCategoryName(item, ABILITIES_CATEGORIES);
      return `${BASE_PATH}/abilities/${categoryName}/${item.slug}`;
    }
    case TYPES.worldFeature.name: {
      return `${BASE_PATH}/world-features/${item.slug}`;
    }
    default:
      return BASE_PATH; // Fallback for unknown types
  }
};

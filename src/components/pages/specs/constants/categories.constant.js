import { TYPES } from '@data';
import { sortByRarity } from '@helpers';
import { DATA } from '@mappers';

export const CATEGORIES = sortByRarity(DATA[TYPES.spec.name], 'asc');

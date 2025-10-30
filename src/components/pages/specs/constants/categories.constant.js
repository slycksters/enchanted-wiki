import { SPECS, TYPES } from '../../../../data';

export const CATEGORIES = Object.values(SPECS).map((spec) => ({
  id: spec.id,
  name: spec.name,
  type: TYPES.spec,
}));

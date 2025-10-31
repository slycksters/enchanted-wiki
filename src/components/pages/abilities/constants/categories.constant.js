import {
  MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  TRAITS,
} from '@data';
import { extractValues } from '@helpers';

const races = extractValues(RACES);
const traits = extractValues(TRAITS);
const magics = extractValues(MAGICS);
const passiveMagics = extractValues(PASSIVE_MAGICS);
const passiveSkills = extractValues(PASSIVE_SKILLS);
// const titles = extractValues();

export const CATEGORIES = [
  { id: 1, name: 'Magics', list: magics },
  { id: 2, name: 'Races', list: races },
  { id: 3, name: 'Traits', list: traits },
  { id: 4, name: 'Passive Magics', list: passiveMagics },
  { id: 5, name: 'Passive Skills', list: passiveSkills },
  // { id: 6, name: 'Titles', list: [{ id: 1, name: 'N/A', type: {}}] },
];

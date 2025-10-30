import {
  MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  TRAITS,
} from '../../../../data';
import { categorizeArray } from '../../../../helpers';

const races = categorizeArray(RACES);
const traits = categorizeArray(TRAITS);
const magics = categorizeArray(MAGICS);
const passiveMagics = categorizeArray(PASSIVE_MAGICS);
const passiveSkills = categorizeArray(PASSIVE_SKILLS);
// const titles = categorizeArray();

export const CATEGORIES = [
  { id: 1, name: 'Races', list: races },
  { id: 2, name: 'Traits', list: traits },
  { id: 3, name: 'Magics', list: magics },
  { id: 4, name: 'Passive Magics', list: passiveMagics },
  { id: 5, name: 'Passive Skills', list: passiveSkills },
  // { id: 6, name: 'Titles', list: [{ id: 1, name: 'N/A', type: {}}] },
];

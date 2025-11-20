import { TYPES } from '../../../../data/index.js';
import { sortByRarity } from '../../../../helpers/index.js';
import { DATA } from '../../../../mappers/index.js';

const races = sortByRarity(DATA[TYPES.race.name], 'asc');
const traits = sortByRarity(DATA[TYPES.trait.name], 'asc');
const magics = sortByRarity(DATA[TYPES.magic.name], 'asc');
const passiveMagics = sortByRarity(DATA[TYPES.passiveMagic.name], 'asc');
const passiveSkills = sortByRarity(DATA[TYPES.passiveSkill.name], 'asc');
const titles = DATA[TYPES.title.name];

export const CATEGORIES = [
  { id: 1, name: 'Magics', list: magics },
  { id: 2, name: 'Races', list: races },
  { id: 3, name: 'Traits', list: traits },
  { id: 4, name: 'Passive Magics', list: passiveMagics },
  { id: 5, name: 'Passive Skills', list: passiveSkills },
  { id: 6, name: 'Titles', list: titles },
];

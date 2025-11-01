import { TYPES } from '@data';
import { DATA } from '@mappers';

const races = DATA[TYPES.race.name];
const traits = DATA[TYPES.trait.name];
const magics = DATA[TYPES.magic.name];
const passiveMagics = DATA[TYPES.passiveMagic.name];
const passiveSkills = DATA[TYPES.passiveSkill.name];

export const CATEGORIES = [
  { id: 1, name: 'Magics', list: magics },
  { id: 2, name: 'Races', list: races },
  { id: 3, name: 'Traits', list: traits },
  { id: 4, name: 'Passive Magics', list: passiveMagics },
  { id: 5, name: 'Passive Skills', list: passiveSkills },
];

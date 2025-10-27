import {
  MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  TRAITS,
} from '../../../data';

export const CATEGORIES = [
  { id: 1, name: 'Races', subList: RACES },
  { id: 2, name: 'Traits', subList: TRAITS },
  { id: 3, name: 'Magics', subList: MAGICS },
  { id: 4, name: 'Passive Magics', subList: PASSIVE_MAGICS },
  { id: 5, name: 'Passive Skills', subList: PASSIVE_SKILLS },
  // { id: 6, name: 'Titles' },
];

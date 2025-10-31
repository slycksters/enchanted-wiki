import {
  GiAncientSword,
  GiDwarfHelmet,
  GiElfHelmet,
  GiMagicPalm,
  GiTreasureMap,
  GiTrophy,
} from 'react-icons/gi';
import {
  AbilitiesPage,
  BossesPage,
  IslandsPage,
  ItemsPage,
  SpecsPage,
  TrialsPage,
} from '@components/pages';
import { BASE_PATH } from './basePath.constant';

export const PAGE_LINKS = [
  {
    id: 1,
    element: AbilitiesPage,
    icon: GiMagicPalm,
    name: 'Abilities',
    path: `${BASE_PATH}/abilities`,
  },
  {
    id: 2,
    element: SpecsPage,
    icon: GiElfHelmet,
    name: 'Specs',
    path: `${BASE_PATH}/specs`,
  },
  {
    id: 3,
    element: ItemsPage,
    icon: GiAncientSword,
    name: 'Items',
    path: `${BASE_PATH}/items`,
  },
  {
    id: 4,
    element: IslandsPage,
    icon: GiTreasureMap,
    name: 'Islands',
    path: `${BASE_PATH}/islands`,
  },
  {
    id: 5,
    element: BossesPage,
    icon: GiDwarfHelmet,
    name: 'Bosses',
    path: `${BASE_PATH}/bosses`,
  },
  {
    id: 6,
    element: TrialsPage,
    icon: GiTrophy,
    name: 'Trials',
    path: `${BASE_PATH}/trials`,
  },
];

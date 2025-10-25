import {
  GiAncientSword,
  GiDwarfHelmet,
  GiElfHelmet,
  GiMagicPalm,
  GiTreasureMap,
  GiTrophy,
} from 'react-icons/gi';

import { BASE_PATH } from './basePath.constant';
import {
  AbilitiesPage,
  BossesPage,
  IslandsPage,
  ItemsPage,
  SpecsPage,
  TrialsPage,
} from '../pages';

export const PAGE_LINKS = [
  {
    id: 1,
    element: <AbilitiesPage />,
    icon: GiMagicPalm,
    label: 'Abilities',
    path: `${BASE_PATH}/abilities`,
  },
  {
    id: 2,
    element: <SpecsPage />,
    icon: GiElfHelmet,
    label: 'Specs',
    path: `${BASE_PATH}/specs`,
  },
  {
    id: 3,
    element: <ItemsPage />,
    icon: GiAncientSword,
    label: 'Items',
    path: `${BASE_PATH}/items`,
  },
  {
    id: 4,
    element: <IslandsPage />,
    icon: GiTreasureMap,
    label: 'Islands',
    path: `${BASE_PATH}/islands`,
  },
  {
    id: 5,
    element: <BossesPage />,
    icon: GiDwarfHelmet,
    label: 'Bosses',
    path: `${BASE_PATH}/bosses`,
  },
  {
    id: 6,
    element: <TrialsPage />,
    icon: GiTrophy,
    label: 'Trials',
    path: `${BASE_PATH}/trials`,
  },
];

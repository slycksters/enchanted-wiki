import {
  GiBookCover,
  GiIsland,
  GiObelisk,
  GiPerson,
  GiSpikedShoulderArmor,
  GiSwapBag,
} from 'react-icons/gi';
import {
  AbilitiesPage,
  IslandsPage,
  ItemsPage,
  NpcsPage,
  SpecsPage,
  WorldFeaturesPage,
} from '@components/pages';
import { BASE_PATH } from './basePath.constant';

export const PAGE_LINKS = [
  {
    id: 1,
    element: AbilitiesPage,
    icon: GiBookCover,
    name: 'Abilities',
    path: `${BASE_PATH}/abilities`,
  },
  {
    id: 2,
    element: SpecsPage,
    icon: GiSpikedShoulderArmor,
    name: 'Equips',
    path: `${BASE_PATH}/equips`,
  },
  {
    id: 3,
    element: ItemsPage,
    icon: GiSwapBag,
    name: 'Items',
    path: `${BASE_PATH}/items`,
  },
  {
    id: 4,
    element: IslandsPage,
    icon: GiIsland,
    name: 'Islands',
    path: `${BASE_PATH}/islands`,
  },
  {
    id: 5,
    element: NpcsPage,
    icon: GiPerson,
    name: 'NPCs',
    path: `${BASE_PATH}/npcs`,
  },
  {
    id: 6,
    element: WorldFeaturesPage,
    icon: GiObelisk,
    name: 'World Features',
    path: `${BASE_PATH}/world-features`,
  },
];

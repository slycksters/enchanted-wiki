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
    path: `abilities`,
  },
  {
    id: 2,
    element: SpecsPage,
    icon: GiSpikedShoulderArmor,
    name: 'Equips',
    path: `equips`,
  },
  {
    id: 3,
    element: ItemsPage,
    icon: GiSwapBag,
    name: 'Items',
    path: `items`,
  },
  {
    id: 4,
    element: IslandsPage,
    icon: GiIsland,
    name: 'Islands',
    path: `islands`,
  },
  {
    id: 5,
    element: NpcsPage,
    icon: GiPerson,
    name: 'NPCs',
    path: `npcs`,
  },
  {
    id: 6,
    element: WorldFeaturesPage,
    icon: GiObelisk,
    name: 'World Features',
    path: `world-features`,
  },
];

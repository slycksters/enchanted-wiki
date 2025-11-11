import {
  GiBookCover,
  GiIsland,
  GiObelisk,
  GiPerson,
  GiSpikedShoulderArmor,
  GiSwapBag,
} from 'react-icons/gi';
import { defaultRoutes } from './defaultRoutes.constant';

export const PAGE_LINKS = [
  {
    id: 1,
    icon: GiBookCover,
    name: 'Abilities',
    path: defaultRoutes.abilities,
  },
  {
    id: 2,
    icon: GiSpikedShoulderArmor,
    name: 'Equips',
    path: defaultRoutes.equips,
  },
  {
    id: 3,
    icon: GiSwapBag,
    name: 'Items',
    path: defaultRoutes.items,
  },
  {
    id: 4,
    icon: GiIsland,
    name: 'Islands',
    path: defaultRoutes.islands,
  },
  {
    id: 5,
    icon: GiPerson,
    name: 'NPCs',
    path: defaultRoutes.npcs,
  },
  {
    id: 6,
    icon: GiObelisk,
    name: 'World Features',
    path: defaultRoutes.worldFeatures,
  },
];

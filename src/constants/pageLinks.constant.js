import {
  GiBookCover,
  GiIsland,
  GiObelisk,
  GiPerson,
  GiSpikedShoulderArmor,
  GiSwapBag,
} from 'react-icons/gi';
import { RiBarChart2Fill } from "react-icons/ri";

export const PAGE_LINKS = [
  {
    id: 1,
    icon: GiBookCover,
    name: 'Abilities',
    path: '/abilities',
  },
  {
    id: 2,
    icon: GiSpikedShoulderArmor,
    name: 'Equips',
    path: '/equips',
  },
  {
    id: 3,
    icon: GiSwapBag,
    name: 'Items',
    path: '/items',
  },
  {
    id: 4,
    icon: GiIsland,
    name: 'Islands',
    path: '/islands',
  },
  {
    id: 5,
    icon: GiPerson,
    name: 'NPCs',
    path: '/npcs',
  },
  {
    id: 6,
    icon: GiObelisk,
    name: 'World Features',
    path: '/world-features',
  },
  {
    id: 7,
    icon: RiBarChart2Fill,
    name: 'Stat Builder',
    path: '/stat-builder',
  },
];

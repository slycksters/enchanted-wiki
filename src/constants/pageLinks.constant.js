import {
  GiBookCover,
  GiIsland,
  GiObelisk,
  GiPerson,
  GiSpikedShoulderArmor,
  GiSwapBag,
} from 'react-icons/gi';
import { RiBarChart2Fill } from "react-icons/ri";
import { BASE_PATH } from './basePath.constant';

export const PAGE_LINKS = [
  {
    id: 1,
    icon: GiBookCover,
    name: 'Abilities',
    path: `${BASE_PATH}/abilities`,
  },
  {
    id: 2,
    icon: GiSpikedShoulderArmor,
    name: 'Equips',
    path: `${BASE_PATH}/equips`,
  },
  {
    id: 3,
    icon: GiSwapBag,
    name: 'Items',
    path: `${BASE_PATH}/items`,
  },
  {
    id: 4,
    icon: GiIsland,
    name: 'Islands',
    path: `${BASE_PATH}/islands`,
  },
  {
    id: 5,
    icon: GiPerson,
    name: 'NPCs',
    path: `${BASE_PATH}/npcs`,
  },
  {
    id: 6,
    icon: GiObelisk,
    name: 'World Features',
    path: `${BASE_PATH}/world-features`,
  },
  {
    id: 7,
    icon: RiBarChart2Fill,
    name: 'Stat Builder',
    path: `${BASE_PATH}/stat-builder`,
  },
];

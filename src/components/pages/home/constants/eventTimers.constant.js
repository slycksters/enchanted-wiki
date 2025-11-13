import { NPCS } from '@data';

export const EVENT_TIMERS = {
  bosses: {
    erza: {
      id: 1,
      intervals: [10, 20, 30, 40, 50, 60],
      location: 'Sunblaze Isle',
      name: NPCS.erzaBoss.name,
    },
    gray: {
      id: 2,
      intervals: [10, 20, 30, 40, 50, 60],
      location: 'Frostveil Hollow',
      name: NPCS.grayBoss.name,
    },
    natsuDragneel: {
      id: 3,
      intervals: [15, 30, 45, 60],
      location: 'Coral Abyss',
      name: NPCS.natsuDragneelBoss.name,
    },
    natsu: {
      id: 4,
      intervals: [15, 30, 45, 60],
      location: 'Verdant Mire',
      name: NPCS.natsuBoss.name,
    },
    shatterGrove: {
      id: 5,
      intervals: [10, 20, 30, 40, 50, 60],
      location: 'Shattergrove',
      name: 'Random',
    },
    death: {
      id: 6,
      intervals: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      location: `Hallow's Eve`,
      name: NPCS.deathBoss.name,
    },
  },
  dungeons: {
    leftDungeon: {
      id: 7,
      intervals: [20, 40, 60],
      location: 'Lost Cave',
      name: 'Left Dungeon',
    },
    rightDungeon: {
      id: 8,
      intervals: [10, 30, 50],
      location: 'Lost Cave',
      name: 'Right Dungeon',
    }
  }
}
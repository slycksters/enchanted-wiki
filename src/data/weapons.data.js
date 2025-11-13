import { assets } from '@assets';
import { DAMAGE_TYPES, RARITIES, TYPES } from './enums';

const weaponImages = assets.images.weapons;
const weaponVideos = assets.videos.weapons;

export const WEAPONS = {
  knuckles: {
    id: 1,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.knucklesM1,
        description: 'A swift and direct punch, channeling your raw power.',
        name: 'Basic Attack [M1]',
      },
    ],
    attachment: weaponImages.knuckles,
    description: `A starter combat tool. These knuckles offer no special abilities, translating your pure, untamed strength directly into every blow.`,
    name: 'Knuckles',
    rarity: RARITIES.uncommon,
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 4.5,
      perStat: 0.05,
    },
    type: TYPES.weapon,
  },
  wingedSword: {
    id: 2,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.wingedSwordM1,
        description:
          'Slice through your foes with a lightning-fast arc of the blade.',
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.wingedSwordZ,
        description:
          'Raise the sword to unleash a powerful, concussive burst, damaging all nearby enemies.',
        name: 'Winged Fury [Z]',
      },
      {
        id: 3,
        attachment: weaponVideos.wingedSwordX,
        description:
          'Execute a precise and powerful thrust, concentrating all force into a single point.',
        name: 'Winged Thrust [X]',
      },
    ],
    attachment: weaponImages.wingedSword,
    description:
      'An elegant and rare blade, as swift as the wind and brimming with explosive energy.',
    name: 'Winged Sword',
    rarity: RARITIES.rare,
    sources: ['luca'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 6.75,
      perStat: 0.075,
    },
    type: TYPES.weapon,
  },
  titaniumGauntlets: {
    id: 3,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.titaniumGauntletsM1,
        description:
          'Deliver a slow but devastating punch with the weight of pure titanium.',
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.titaniumGauntletsZ,
        description: 'Slam your fists into the ground, creating a shockwave that damages nearby enemies.',
        name: 'Iron Fist Slam [Z]',
      },
      {
        id: 3,
        attachment: weaponVideos.titaniumGauntletsZ,
        description: 'Unleash a devastating uppercut capable of launching enemies into the air.',
        name: 'Iron Upper Cut [X]',
      },
    ],
    attachment: weaponImages.titaniumGauntlets,
    description:
      'Forged from a rare and incredibly sturdy alloy. These gauntlets sacrifice speed for crushing, brute-force impact.',
    name: 'Titanium Gauntlets',
    rarity: RARITIES.rare,
    sources: ['jeremy'],
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 6,
      perStat: 0.065,
    },
    type: TYPES.weapon,
  },
  katana: {
    id: 4,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.katanaM1,
        description:
          'Execute a swift, precise slash, the hallmark of a master swordsman.',
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.katanaZ,
        description:
          'Lunge forward with incredible speed, piercing your target in an instant.',
        name: 'Flash Pierce [Z]',
      },
      {
        id: 3,
        attachment: weaponVideos.katanaX,
        description:
          'Unleash a silent, razor-sharp arc of energy that cleaves through all enemies in its path.',
        name: 'Silent Edge [X]',
      },
    ],
    attachment: weaponImages.katana,
    description:
      'A masterfully forged blade, demanding discipline and precision from its wielder. Its legendary edge delivers lethal, lightning-fast cuts.',
    name: 'Katana',
    rarity: RARITIES.rare,
    sources: ['rufus'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 7,
      perStat: 0.082,
    },
    type: TYPES.weapon,
  },
  medievalSword: {
    id: 5,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.medievalSwordM1,
        description: `Deliver a powerful, broad-arcing slash, backed by a knight's full strength.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.medievalSwordZ,
        description:
          'Spin into a whirlwind of steel, striking every foe around you with a single, devastating cut.',
        name: `Knight's Spiral [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.medievalSwordX,
        description:
          'Unleash a ferocious tempest of strikes, overwhelming enemies directly in front of you with a relentless flurry.',
        name: `Knight's Tempest [X]`,
      },
    ],
    attachment: weaponImages.medievalSword,
    description:
      'A battle-forged blade, heavy with the promise of victory. Wielded by valiant knights, its crushing weight and relentless edge are designed to break both shields and spirits.',
    name: 'Medieval Sword',
    sources: ['meto'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 7.25,
      perStat: 0.1,
    },
    rarity: RARITIES.epic,
    type: TYPES.weapon,
  },
  claws: {
    id: 6,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.clawsM1,
        description: `Lash out with a blindingly fast strike, tearing at your foe.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.clawsZ,
        description:
          'Explode into a spinning vortex of shadow and steel, shredding any enemy caught in the whirlwind.',
        name: `Spinjutszu [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.clawsX,
        description:
          'Sweep your claws horizontally, then unleash a furious, rising torrent of slashes to lift your enemy off their feet.',
        name: `Upward Slash [X]`,
      },
    ],
    attachment: weaponImages.claws,
    description: `A pair of vicious claws crackling with shadow energy. They feel less like a weapon and more like a predator's natural extension, hungry to rend flesh and bone.`,
    name: 'Claws',
    rarity: RARITIES.epic,
    sources: ['ola'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 7,
      perStat: 0.095,
    },
    type: TYPES.weapon,
  },
  frostedSpear: {
    id: 7,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.frostedSpearM1,
        description: `A swift jab with the spear's frozen point, delivering a sharp, biting chill on impact.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.frostedSpearZ,
        description: `Execute a powerful, focused thrust. Upon impact, the spear's magic erupts into a violent, localized blizzard, battering the target with ice and wind.`,
        name: `Icicle Strike [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.frostedSpearX,
        description:
          'Unleash a rapid barrage of icy thrusts, overwhelming enemies in a relentless assault of freezing points and punishing hail.',
        name: `Snow Piercer [X]`,
      },
      {
        id: 4,
        attachment: weaponVideos.frostedSpearC,
        description:
          'Plunge the spear into the ground, causing the very air to freeze and erupt into a violent blizzard that rains jagged icicles down on all surrounding enemies.',
        name: `Prison of Frost [C]`,
      },
    ],
    attachment: weaponImages.frostedSpear,
    description:
      'Forged from the heart of a timeless glacier, this legendary spear radiates an aura of absolute zero. Legends say it was first shaped by a powerful ice mage, and its touch is cold enough to freeze not just the body, but the very soul.',
    name: 'Frosted Spear',
    rarity: RARITIES.legendary,
    sources: ['graySpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 8.25,
      perStat: 0.1075,
    },
    type: TYPES.weapon,
  },
  empressSword: {
    id: 8,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.empressSwordM1,
        description: `Perform a majestic sweep, leaving an arc of superheated plasma in its wake.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.empressSwordZ,
        description: `Unleash a blinding flurry of attacks, weaving a cage of inescapable flame around your target.`,
        name: `Flaming Slashes [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.empressSwordX,
        description: `Lunge forward and thrust your blade with searing force, unleashing a concentrated surge of blazing fire that scorches everything in its path.`,
        name: `Inferno Pierce [X]`,
      },
      {
        id: 4,
        attachment: weaponVideos.empressSwordC,
        description: 'A circular explosion damaging all enemies nearby',
        name: `Inferno Rift [C]`,
      },
    ],
    attachment: weaponImages.empressSword,
    description: `A blade of sovereign authority, said to be forged in the heart of a dying star. Its edge doesn't just cut; it issues a fiery decree, commanding flames to consume all who stand against its wielder.`,
    name: 'Empress Sword',
    rarity: RARITIES.legendary,
    sources: ['erzaSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 8,
      perStat: 0.106,
    },
    type: TYPES.weapon,
  },
  dragonSlayerGauntlets: {
    id: 9,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.dragonSlayerGauntletsM1,
        description: `Deliver a devastating, superheated blow that feels less like a punch and more like a small, contained explosion on impact.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.dragonSlayerGauntletsZ,
        description: `Slam your fists into the earth, shattering the ground and releasing the gauntlets's primal energy in a single, devastating volcanic eruption.`,
        name: `Fiery Slam [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.dragonSlayerGauntletsX,
        description: `Drive a brutal uppercut into your foe, simultaneously detonating a focused pillar of fire that blasts them skyward.`,
        name: `Dragon's Knockout [X]`,
      },
      {
        id: 4,
        attachment: weaponVideos.dragonSlayerGauntletsC,
        description:
          'Roar with draconic power as you swing your arms, commanding a rapid-fire barrage of concussive explosions to demolish everything in your path.',
        name: `Fiery Strike [C]`,
      },
    ],
    attachment: weaponImages.dragonSlayerGauntlets,
    description: `Crafted from the obsidian scales of a vanquished Fire Dragon and imbued with its roaring soul. These legendary gauntlets don't just wield fire; they unleash the untamed, concussive fury of a dragon's wrath with every earth-shattering blow.`,
    name: 'Dragon Slayer Gauntlets',
    rarity: RARITIES.legendary,
    sources: ['natsuSpec'],
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 8.5,
      perStat: 0.115,
    },
    type: TYPES.weapon,
  },
  hellforgeGauntlets: {
    id: 10,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.hellforgeGauntletsM1,
        description: `Each blow is a percussive blast of pure heat, landing with enough force to liquefy stone and sear the very soul of the target.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.hellforgeGauntletsZ,
        description: `Transform the very ground into a searing crucible. A torrent of inescapable, soul-consuming flame erupts around you, continuously melting down any foe foolish enough to remain nearby.`,
        name: `Crucible [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.hellforgeGauntletsX,
        description: `Fully unleash the gauntlets\' true nature. Reality cracks as you command a relentless, chaotic series of detonations, hammering the area from all angles with the unrestrained fury of the Hellforge.`,
        name: `Hellforge [X]`,
      },
    ],
    attachment: weaponImages.hellforgeGauntlets,
    description: `Not a weapon forged in Hell, but a fragment of the infernal forge itself, bound in soul-etched iron. These gauntlets don't just wield fire; they are a constant, self-sustaining cataclysm, forever hungry to melt reality back into primordial flame.`,
    name: 'Hellforge Gauntlets',
    rarity: RARITIES.mythical,
    sources: ['hezzy'],
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 9.5,
      perStat: 0.135,
    },
    type: TYPES.weapon,
  },
  darkSword: {
    id: 11,
    abilities: [
      {
        id: 1,
        attachment: weaponVideos.darkSwordM1,
        description: `Swing a blade of pure entropy. Each slash tears a fleeting wound in reality itself, leaving behind a chilling whisper of the void that corrodes the target's existence.`,
        name: 'Basic Attack [M1]',
      },
      {
        id: 2,
        attachment: weaponVideos.darkSwordZ,
        description: `Become the epicenter of a swirling gravitational anomaly. This raging vortex of condensed nothingness pulls in all nearby matter, shredding it with the inescapable force of a collapsing star.`,
        name: `Dark Tornado [Z]`,
      },
      {
        id: 3,
        attachment: weaponVideos.darkSwordX,
        description: `Carve a wound into the fabric of space-time, launching a silent, crescent-shaped wave of pure annihilation. This traveling rift erases everything in its path, leaving only absolute silence in its wake.`,
        name: `Dark Slash [X]`,
      },
      {
        id: 4,
        attachment: weaponVideos.darkSwordC,
        description: `Thrust the blade into a single point, designating it as the epicenter of oblivion. A momentary singularity forms and collapses, unleashing a cataclysmic implosion of dark matter that crushes and unmakes all surrounding reality.`,
        name: `Dark Void [C]`,
      },
    ],
    attachment: weaponImages.darkSword,
    description:
      'This is not a blade forged of metal, but a shard of the primordial void given form—a sliver of the absolute nothingness that predates existence itself. Its edge does not cut; it unmakes, silently erasing matter, energy, and even light from reality.',
    name: 'Dark Sword',
    rarity: RARITIES.mythical,
    sources: ['jerome'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 10,
      perStat: 0.14,
    },
    type: TYPES.weapon,
  },
};

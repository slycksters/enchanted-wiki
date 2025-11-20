import { assets } from '../assets/index.js';
import { DAMAGE_TYPES, RARITIES, TYPES } from './enums/index.js';

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
    description: `Simple but honest, these knuckles channel nothing but your own raw force. Each strike is a direct expression of unrefined power, turning pure will into blunt impact.`,
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
      'A rare blade light enough to dance yet fierce enough to detonate with sudden bursts of power. Every swing carries the breath of the wind, striking with explosive elegance.',
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
        description:
          'Slam your fists into the ground, creating a shockwave that damages nearby enemies.',
        name: 'Iron Fist Slam [Z]',
      },
      {
        id: 3,
        attachment: weaponVideos.titaniumGauntletsZ,
        description:
          'Unleash a devastating uppercut capable of launching enemies into the air.',
        name: 'Iron Upper Cut [X]',
      },
    ],
    attachment: weaponImages.titaniumGauntlets,
    description:
      'Built from an unyielding alloy, these gauntlets trade speed for devastating weight. Each blow lands like falling iron, crushing anything that dares to stand before you.',
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
      'A blade of discipline and precision, demanding clarity from its wielder. Its legendary sharpness delivers cuts so swift they feel like passing whispers of death.',
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
      'A heavy warblade forged for knights who fought until their armor cracked and their spirits blazed. Its weight carries the promise of decisive victory, breaking shields and resolve alike.',
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
    description: `Born of shadow and ferality, these claws behave less like crafted weapons and more like extensions of a hungry beast. Their strikes carve through air and flesh with predatory intent.`,
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
      'Shaped from a timeless glacier, this spear radiates an unforgiving chill. Its frozen core pierces not only flesh but the warmth of the soul itself, leaving only crystalline silence behind.',
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
    description: `Forged in a star's dying breath, this regal blade burns with divine authority. Its flames obey no laws but the wielder's will, branding every strike as a mandate of annihilation.`,
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
    description: `Forged from the obsidian scales of a fallen Fire Dragon, these gauntlets pulse with volcanic fury. Each punch erupts with draconic wrath, turning the battlefield into blazing ruin.`,
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
    description: `A fragment of the infernal crucible itself, bound in cursed iron and living flame. They do not simply attack—they consume, melting reality into raw, primal fire with every strike.`,
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
      'A weapon not of metal but of the void, carved from the silent nothingness before creation. Its edge does not slice— it erases, unraveling reality with every whisper of motion.',
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

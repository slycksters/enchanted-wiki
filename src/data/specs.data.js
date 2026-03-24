import { assets } from '@assets';
import { DAMAGE_TYPES, RARITIES, TYPES } from './enums';

const specImages = assets.images.specs;
const specSkillVideos = assets.videos.specs;

export const SPECS = {
  ichigo: {
    id: 1,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.ichigoM1,
        name: 'Basic Attack [M1]',
        description:
          'A swift, focused strike imbued with spiritual pressure that cuts clean and true.',
      },
      {
        id: 2,
        attachment: specSkillVideos.ichigoZ,
        name: 'Getsuga Tensho [Z]',
        description:
          'Channels immense spiritual energy into his blade, unleashing a crescent wave that tears through everything in its path — a single strike that carries the wrath of a Shinigami.',
      },
      {
        id: 3,
        attachment: specSkillVideos.ichigoX,
        name: 'Flash Strikes [X]',
        description:
          'Moves with lightning speed, appearing and vanishing in bursts of reiryoku — cutting down foes before they can even blink.',
      },
      {
        id: 4,
        attachment: specSkillVideos.ichigoC,
        name: `Reaper's Cut [C]`,
        description:
          'Executes a flurry of rapid slashes charged with spiritual force, sweeping through enemies with precise, deadly rhythm.',
      },
      {
        id: 5,
        attachment: specSkillVideos.ichigoV,
        name: 'Getsuga Barrage [V]',
        description:
          'Channels a surge of unrestrained power into his strikes before releasing a catastrophic energy blast that shatters the ground and engulfs all in front of him.',
      },
      {
        id: 6,
        attachment: specSkillVideos.ichigoF,
        name: 'Hollow Form [F]',
        description:
          'Succumbs to his inner hollow — donning the mask of the void and wielding a darker, more feral blade. Gain sprint speed bonus when active.',
      },
    ],
    attachment: specImages.ichigo,
    description:
      '<p>Ichigo is a determined warrior whose presence commands attention on the battlefield. He carries the spirit of a Shinigami, wielding immense spiritual energy that flows through his blade with explosive intensity.</p> <p>He channels raw spiritual power to unleash devastating energy waves, rapid strikes, and enhanced forms that amplify both his speed and destructive potential.</p>',
    isGatcha: false,
    name: 'Ichigo',
    rarity: RARITIES.epic,
    sources: ['ichigoSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 8.75,
      perStat: 0.1162,
    },
    type: TYPES.spec,
  },
  yami: {
    id: 2,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.yamiM1,
        name: 'Basic Attack [M1]',
        description:
          'A controlled yet deadly sword strike imbued with condensed dark mana.',
      },
      {
        id: 2,
        attachment: specSkillVideos.yamiZ,
        name: 'Dark Blitz [Z]',
        description: `Channels darkness into his blade and rushes forward with terrifying speed, cutting through foes before they even realize he's moved.`,
      },
      {
        id: 3,
        attachment: specSkillVideos.yamiX,
        name: 'Dimensional Slash [X]',
        description:
          'Focuses immense mana into a single strike, unleashing a dark slash that cuts through space itself, erasing anything caught in its path.',
      },
      {
        id: 4,
        attachment: specSkillVideos.yamiC,
        name: `Death Thrust [C]`,
        description:
          'Concentrates darkness into a single point and releases it in a precise, destructive thrust capable of piercing even the toughest defenses.',
      },
      {
        id: 5,
        attachment: specSkillVideos.yamiV,
        name: 'Black Tornado [V]',
        description:
          'Combines physical might with dark magic, forming a raging vortex of shadows that tears apart everything within its reach.',
      },
    ],
    attachment: specImages.yami,
    description: `<p>Yami is a dark and imposing swordsman, feared for his sheer strength and relentless approach. His aura radiates raw power, instilling both awe and dread in anyone who faces him.</p> <p>He manipulates darkness and condensed mana to perform devastating slashes, spatial cuts, and vortex-like attacks that dominate the battlefield with overwhelming force.</p>`,
    isGatcha: false,
    name: 'Yami',
    rarity: RARITIES.epic,
    sources: ['yamiSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 8.75,
      perStat: 0.1162,
    },
    type: TYPES.spec,
  },
  yuno: {
    id: 3,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.yunoM1,
        name: 'Basic Attack [M1]',
        description:
          'A swift magical punch infused with the power of the wind.',
      },
      {
        id: 2,
        attachment: specSkillVideos.yunoZ,
        name: 'Fairy Execution [Z]',
        description:
          'Summons a compressed gust of wind and launches it forward, cutting through enemies with blinding speed.',
      },
      {
        id: 3,
        attachment: specSkillVideos.yunoX,
        name: 'Wind Spiral [X]',
        description: `Channels Sylph's power into a sweeping strike of concentrated air, slicing anything caught within its graceful arc.`,
      },
      {
        id: 4,
        attachment: specSkillVideos.yunoC,
        name: `Comet Breaker [C]`,
        description:
          'Launches a series of wind-forged comets that crash down with immense force, tearing through enemies caught in their descent.',
      },
      {
        id: 5,
        attachment: specSkillVideos.yunoV,
        name: 'Zephyr Tempest [V]',
        description:
          'Unleashes a massive tornado imbued with Spirit magic, erasing everything in its radius with divine precision.',
      },
    ],
    attachment: specImages.yuno,
    description: `<p>Yuno is a highly skilled mage with a calm and precise demeanor. His presence carries the elegance of the wind, moving fluidly through the battlefield with unmatched control.</p> <p>He wields wind magic to generate slicing gusts, aerial projectiles, and massive tornadoes, combining speed and elemental mastery to control the flow of combat.</p>`,
    isGatcha: false,
    name: 'Yuno',
    rarity: RARITIES.epic,
    sources: ['yunoSpec'],
    stats: {
      damageType: DAMAGE_TYPES.magic.name,
      baseDMG: 8.75,
      perStat: 0.1162,
    },
    type: TYPES.spec,
  },
  rudo: {
    id: 4,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.rudoM1,
        name: 'Basic Attack [M1]',
        description:
          'Delivers a series of relentless mechanical punches, each hit powered by the fury of forged steel.',
      },
      {
        id: 2,
        attachment: specSkillVideos.rudoZ,
        name: 'Recycle Rampage [Z]',
        description:
          'Channels raw industrial power into a devastating punch, sending a concussive shockwave forward that crushes anything in its path.',
      },
      {
        id: 3,
        attachment: specSkillVideos.rudoX,
        name: 'Junk Buster [X]',
        description:
          'Unleashes a furious storm of mechanical strikes in every direction, pulverizing enemies caught within the metallic frenzy.',
      },
      {
        id: 4,
        attachment: specSkillVideos.rudoC,
        name: `Dumpster Dive [C]`,
        description:
          'Launches skyward before slamming down with machine-like precision, causing a brutal impact that tears through the ground and enemies alike.',
      },
      {
        id: 5,
        attachment: specSkillVideos.rudoV,
        name: 'Rubble Reaper [V]',
        description:
          'Activates the core reactor and releases a whirlwind of metallic slashes, shredding everything within range under a torrent of recycled ruin.',
      },
    ],
    attachment: specImages.rudo,
    description: `<p>Rudo is a relentless combatant, powered by mechanical might and unyielding force. His body and weaponry are forged for destruction, reflecting his unstoppable drive.</p> <p>He harnesses industrial and mechanical power to deliver crushing punches, spinning strikes, and wide-area impacts, turning the battlefield into a storm of metal and momentum.</p>`,
    isGatcha: false,
    name: 'Rudo Surebrec',
    rarity: RARITIES.legendary,
    sources: ['rudoSpec'],
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 12.5,
      perStat: 0.1504,
    },
    type: TYPES.spec,
  },
  kirito: {
    id: 5,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.kiritoM1,
        name: 'Basic Attack [M1]',
        description:
          'Dual sword strikes executed with perfect synchronization, each blade infused with the trace energy of light and shadow.',
      },
      {
        id: 2,
        attachment: specSkillVideos.kiritoZ,
        name: 'Lunar Divide [Z]',
        description:
          'Draws both blades — each swing tracing a glowing arc beneath the moonlit edge of his will.',
      },
      {
        id: 3,
        attachment: specSkillVideos.kiritoX,
        name: 'Starburst Stream [X]',
        description:
          'Unleashes his legendary dual-wield technique — a relentless storm of strikes that rain down faster than the eye can follow, each blow powered by unyielding resolve.',
      },
      {
        id: 4,
        attachment: specSkillVideos.kiritoC,
        name: `Abyssal Eclipse [C]`,
        description:
          'Channels both blades into a surge of pure energy, creating a spiraling vortex of slashes that engulfs all within its darkened radius.',
      },
      {
        id: 5,
        attachment: specSkillVideos.kiritoV,
        name: 'Afterimage Strikes [V]',
        description:
          'Moves with transcendent speed, leaving behind flickering afterimages — each one cutting with precision and force strong enough to rend the very ground apart.',
      },
    ],
    attachment: specImages.kirito,
    description: `<p>Kirito is a dual-sword wielder whose focus and determination set him apart. He moves with unparalleled speed, striking with the precision of a seasoned duelist.</p> <p>He channels his skill into rapid, synchronized blade techniques that combine light and shadow energy, producing devastating multi-hit attacks and wide-area slashes.</p>`,
    isGatcha: false,
    name: 'Kirito',
    rarity: RARITIES.legendary,
    sources: ['kiritoSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 11.25,
      perStat: 0.1434,
    },
    type: TYPES.spec,
  },
  amoEmpool: {
    id: 6,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.amoEmpoolM1,
        name: 'Basic Attack [M1]',
        description:
          'A swift, electrified kick empowered by precision and voltage.',
      },
      {
        id: 2,
        attachment: specSkillVideos.amoEmpoolZ,
        name: 'Lightning Jambe [Z]',
        description:
          'Channels raw electricity through her legs, unleashing a rapid flurry of kicks that crackle with lightning and scorch everything ahead.',
      },
      {
        id: 3,
        attachment: specSkillVideos.amoEmpoolX,
        name: 'Sparky Orb [X]',
        description:
          'Summons a surge of electrical energy that explodes outward, sending arcs of lightning to electrify all nearby foes.',
      },
      {
        id: 4,
        attachment: specSkillVideos.amoEmpoolC,
        name: `Speed Kicks [C]`,
        description:
          'Moves at speed of light — vanishing in a flash before reappearing to strike with a devastating lightning-charged kick.',
      },
      {
        id: 5,
        attachment: specSkillVideos.amoEmpoolV,
        name: 'Speed Strikes [V]',
        description:
          'Unleashes a storm of lightning-infused kicks, each blow erupting in a brilliant burst that pierces the sky with raw voltage.',
      },
      {
        id: 6,
        attachment: specSkillVideos.amoEmpoolF,
        name: 'Speedster [F]',
        description:
          'Surrounds herself with crackling lightning, her movements surging with explosive energy that grants immense speed and agility.',
      },
    ],
    attachment: specImages.amoEmpool,
    description: `<p>Amo Empool is a nimble and electrifying fighter, radiating energy with every movement. Her speed and agility make her presence feel like a storm in motion.</p> <p>She wields lightning magic through her legs and body, delivering rapid electrified strikes, explosive kicks, and high-voltage bursts that shock and overwhelm her enemies.</p>`,
    isGatcha: false,
    name: 'Amo Empool',
    rarity: RARITIES.legendary,
    sources: ['amoEmpoolSpec'],
    stats: {
      damageType: DAMAGE_TYPES.melee.name,
      baseDMG: 11.25,
      perStat: 0.1434,
    },
    type: TYPES.spec,
  },
  aizen: {
    id: 7,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.aizenM1,
        name: 'Basic Attack [M1]',
        description:
          'Executes refined sword slashes imbued with spiritual pressure, cutting down foes with effortless precision.',
      },
      {
        id: 2,
        attachment: specSkillVideos.aizenZ,
        name: 'Eternal Fracture [Z]',
        description:
          'Unleashes a downward slash that creates a spiraling vortex of energy, consuming all enemies caught within its gravitational pull.',
      },
      {
        id: 3,
        attachment: specSkillVideos.aizenX,
        name: 'Invincibility [X]',
        description:
          'Projects an ethereal shield of immense spiritual force, nullifying all attacks that dare approach his presence.',
      },
      {
        id: 4,
        attachment: specSkillVideos.aizenC,
        name: `Cero [C]`,
        description:
          'Fires a concentrated beam of devastating energy, tearing through the battlefield with overwhelming might.',
      },
      {
        id: 5,
        attachment: specSkillVideos.aizenV,
        name: 'Kurohitsugi [V]',
        description:
          'Summons a massive black coffin of spiritual darkness, sealing his target before impaling them with countless blades of shadow.',
      },
    ],
    attachment: specImages.aizen,
    description: `<p>Aizen exudes calm superiority, his intellect and presence unmatched on any battlefield. He moves with precision, commanding attention with effortless grace.</p> <p>He harnesses immense spiritual energy to manipulate destructive slashes, impenetrable barriers, and concentrated beams, bending power to his will with absolute control.</p>`,
    isGatcha: false,
    name: 'Aizen',
    rarity: RARITIES.legendary,
    sources: ['aizenSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 10,
      perStat: 0.1328,
    },
    type: TYPES.spec,
  },
  yunoV2: {
    id: 8,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.yunoV2M1,
        name: 'Basic Attack [M1]',
        description: 'A swift attack, refined by wind magic.',
      },
      {
        id: 2,
        attachment: specSkillVideos.yunoV2Z,
        name: 'Astral Drive [Z]',
        description:
          'Launches forward propelled by divine wind currents, striking enemies with overwhelming force and celestial precision.',
      },
      {
        id: 3,
        attachment: specSkillVideos.yunoV2X,
        name: 'Celestial Ward [X]',
        description:
          'Summons a radiant shield of wind magic, nullifying incoming attacks as the very air bends to his command.',
      },
      {
        id: 4,
        attachment: specSkillVideos.yunoV2C,
        name: `Wind Blades [C]`,
        description:
          'Unleashes triple cutting waves of compressed wind, slicing in multiple directions and devastating all caught within their path.',
      },
      {
        id: 5,
        attachment: specSkillVideos.yunoV2V,
        name: 'Boreas Catalysm [V]',
        description:
          'Calls upon the wrath of the heavens, summoning a storm of wind-forged meteors that crash upon the battlefield with unstoppable might.',
      },
      {
        id: 6,
        attachment: specSkillVideos.yunoV2F,
        name: 'Spirit Crown Ascension [F]',
        description: `Ascends into his Spirit Dive state, donning the radiant Spirit Crown and wings of Boreas — embodying the wind's divine will while gaining sprint speed.`,
      },
    ],
    attachment: specImages.yunoV2,
    description: `<p>Yuno Grinberryall carries the aura of a former royal, his ambition and sharp intellect radiating with every measured movement. He exudes confidence, drawing the gaze of all around him while maintaining an air of strategic precision.</p> <p>He commands the forces of wind with masterful control, summoning storms and slicing gales that overwhelm his foes, bending the very air to execute both subtle and devastating assaults.</p>`,
    isGatcha: false,
    name: 'Yuno V2',
    rarity: RARITIES.mythical,
    sources: ['yunoV2Spec'],
    stats: {
      damageType: DAMAGE_TYPES.magic.name,
      baseDMG: 8.75,
      perStat: 0.1162,
    },
    type: TYPES.spec,
  },
  yoriichi: {
    id: 9,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.yoriichiM1,
        name: 'Basic Attack [M1]',
        description:
          'Unleashes swift, precise sword strikes infused with blazing sunfire, cutting down foes with divine grace.',
      },
      {
        id: 2,
        attachment: specSkillVideos.yoriichiZ,
        name: 'Sun Counter [Z]',
        description:
          'Channels solar energy into a fiery counterattack, releasing a searing wave that scorches all who cross its path.',
      },
      {
        id: 3,
        attachment: specSkillVideos.yoriichiX,
        name: 'Clear Blue Sky [X]',
        description:
          'Focuses immense heat into the blade, cleaving the ground in a blazing arc that engulfs nearby enemies in fire.',
      },
      {
        id: 4,
        attachment: specSkillVideos.yoriichiC,
        name: `Flash Dance [C]`,
        description:
          'Performs the Hinokami Kagura with godlike speed — a flurry of flaming slashes that incinerates everything in his wake.',
      },
      {
        id: 5,
        attachment: specSkillVideos.yoriichiV,
        name: 'Flaming Dance [V]',
        description:
          'Dashes forward in a flash of fire, striking the enemy with a blazing sword slash that leaves trails of searing light.',
      },
    ],
    attachment: specImages.yoriichi,
    description: `<p>Yoriichi is a disciplined warrior with a radiant presence, his focus unwavering in combat. Every motion resonates with the precision of the sun itself.</p> <p>He channels solar energy through his blade, producing blazing slashes, fiery counterattacks, and waves of searing heat that incinerate his surroundings with divine intensity.</p>`,
    isGatcha: false,
    name: 'Yoriichi',
    rarity: RARITIES.mythical,
    sources: ['yoriichiSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 16,
      perStat: 0.1906,
    },
    type: TYPES.spec,
  },
  kokushibo: {
    id: 10,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.kokushiboM1,
        name: 'Basic Attack [M1]',
        description:
          'Performs swift, elegant sword strikes imbued with crescent moon energy, cutting through enemies with cold precision.',
      },
      {
        id: 2,
        attachment: specSkillVideos.kokushiboZ,
        name: 'First-Form [Z]',
        description:
          'Swirls his blade in a circular motion, generating spiraling moon blades that slice through all foes nearby.',
      },
      {
        id: 3,
        attachment: specSkillVideos.kokushiboX,
        name: 'Sixteenth-Form [X]',
        description:
          'Focuses demonic power into a single point, unleashing a condensed crescent slash toward the cursor with destructive force.',
      },
      {
        id: 4,
        attachment: specSkillVideos.kokushiboC,
        name: `Fifth-Form [C]`,
        description:
          'Channels spinning arcs of moonlight, projecting a flurry of slashes that devastate enemies in front of him.',
      },
      {
        id: 5,
        attachment: specSkillVideos.kokushiboV,
        name: 'Seventh-Form [V]',
        description:
          'Unleashes a deadly three-step assault, each strike empowered by demonic moonlight, finishing with a massive crescent slash that rends the battlefield.',
      },
    ],
    attachment: specImages.kokushibo,
    description: `<p>Kokushibo is a fearsome swordsman, exuding cold elegance and deadly precision. His presence is both mesmerizing and intimidating, as if the moon itself guides his blade.</p> <p>He wields demonic moon energy, executing crescent slashes, spiraling attacks, and concentrated bursts of power that punish mistakes and dominate the battlefield.</p>`,
    isGatcha: false,
    name: 'Kokushibo',
    rarity: RARITIES.mythical,
    sources: ['kokushiboSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 16,
      perStat: 0.1906,
    },
    type: TYPES.spec,
  },
  ichigoV2: {
    id: 11,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.ichigoV2M1,
        name: 'Basic Attack [M1]',
        description:
          'Delivers rapid sword strikes infused with Fullbring energy, cutting through enemies with explosive impact.',
      },
      {
        id: 2,
        attachment: specSkillVideos.ichigoV2Z,
        name: 'Getsuga Tensho [Z]',
        description:
          'Channels condensed Fullbring power into his blade and unleashes a crescent-shaped energy wave that tears through everything in its path.',
      },
      {
        id: 3,
        attachment: specSkillVideos.ichigoV2X,
        name: 'Flashstrikes [X]',
        description:
          'Dashes forward in a burst of speed, slashing all enemies in his path before performing a devastating follow-up strike upon landing.',
      },
      {
        id: 4,
        attachment: specSkillVideos.ichigoV2C,
        name: `Reaper's Cut [C]`,
        description:
          'Executes a three-stage combo of powerful Fullbring-infused slashes, each swing radiating with explosive force.',
      },
      {
        id: 5,
        attachment: specSkillVideos.ichigoV2V,
        name: 'Vasto Roar [V]',
        description:
          'Unleashes an eruption of spiritual energy from within, devastating all enemies caught in the area with sheer overwhelming pressure.',
      },
      {
        id: 6,
        attachment: specSkillVideos.ichigoV2F,
        name: 'Vasto Lorde [F]',
        description:
          'Transforms into his Vasto Lorde form, tapping into his Hollow instincts to release terrifying power while gaining increased speed.',
      },
    ],
    attachment: specImages.ichigoV2,
    description: `<p>Ichigo V2 is a fierce Fullbringer whose instincts drive explosive combat. He carries an aura of raw determination and relentless momentum into every battle.</p> <p>He channels Fullbring energy to enhance his sword strikes, release energy waves, dash at incredible speeds, and transform into his Vasto Lorde form for unparalleled power.</p>`,
    isGatcha: false,
    name: 'Ichigo V2',
    rarity: RARITIES.exotic,
    sources: ['ichigoV2Spec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 18.5,
      perStat: 0.2107,
    },
    type: TYPES.spec,
  },
  inumaki: {
    id: 12,
    abilities: [
      // {
      //   id: 1,
      //   attachment: specSkillVideos.inumakiM1,
      //   name: 'Basic Attack [M1]',
      //   description:
      //     'Delivers rapid sword strikes infused with Fullbring energy, cutting through enemies with explosive impact.',
      // },
      {
        id: 2,
        attachment: specSkillVideos.inumakiZ,
        name: `Stop [Z]`,
        description:
          ' Shouts "Stop," creating a concussive shockwave that halts and pushes back enemies.',
      },
      {
        id: 3,
        attachment: specSkillVideos.inumakiX,
        name: 'Explode [X]',
        description:
          ' Commands "Explode" to release a violent burst of Cursed Energy.',
      },
      {
        id: 4,
        attachment: specSkillVideos.inumakiC,
        name: `Blast [C]`,
        description:
          'Fires a focused beam of Cursed Energy, stunning and hitting enemies with successive waves.',
      },
      {
        id: 5,
        attachment: specSkillVideos.inumakiV,
        name: 'Crumble [V]',
        description:
          'Shouts "Crumble," projecting immense energy to slam enemies to the ground.',
      },
    ],
    attachment: specImages.inumaki,
    description: `<p>Inumaki is a unique caster whose words carry immeasurable weight. His calm and deliberate voice shapes the battlefield with every command.</p> <p>He uses Cursed Speech to imbue his words with devastating energy, generating shockwaves, eruptions, and focused beams that manipulate both distance and the flow of combat.</p>`,
    isGatcha: false,
    isVaulted: true,
    name: 'Inumaki',
    rarity: RARITIES.legendary,
    sources: ['inumakiSpec'],
    stats: {
      damageType: DAMAGE_TYPES.magic.name,
      baseDMG: 11.25,
      perStat: 0.1434,
    },
    type: TYPES.spec,
  },
  toji: {
    id: 13,
    abilities: [
      // {
      //   id: 1,
      //   attachment: specSkillVideos.inumakiM1,
      //   name: 'Basic Attack [M1]',
      //   description:
      //     'Delivers rapid sword strikes infused with Fullbring energy, cutting through enemies with explosive impact.',
      // },
      {
        id: 2,
        attachment: specSkillVideos.tojiZ,
        name: `Butcher's Edge [Z]`,
        description:
          'Thrusts forward at rapid speed, piercing multiple enemies in a line with your Cursed Tool.',
      },
      {
        id: 3,
        attachment: specSkillVideos.tojiX,
        name: 'Chain Fang [X]',
        description:
          'Spins your Cursed Tool in a wide arc, hitting all nearby enemies and creating a deadly zone.',
      },
      {
        id: 4,
        attachment: specSkillVideos.tojiC,
        name: `Predator Dash [C]`,
        description:
          'Launches a cleaving projectile of kinetic energy, slicing enemies from a distance.',
      },
      {
        id: 5,
        attachment: specSkillVideos.tojiV,
        name: 'Crimson Dissection [V]',
        description:
          'Unleashes a blindingly fast flurry of slashes, hitting all enemies around you repeatedly.',
      },
    ],
    attachment: specImages.toji,
    description: `<p>Toji embodies peak physical perfection, a warrior who relies on skill, speed, and raw power rather than magic. His presence is that of an unstoppable predator.</p> <p>He harnesses the strength of his body and Cursed Tools to execute superhuman strikes, dashes, and flurries of attacks, overwhelming enemies with relentless physical prowess.</p>`,
    isGatcha: false,
    isVaulted: true,
    name: 'Toji',
    rarity: RARITIES.mythical,
    sources: ['tojiSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 14,
      perStat: 0.1704,
    },
    type: TYPES.spec,
  },
  death: {
    id: 14,
    abilities: [
      {
        id: 1,
        attachment: specSkillVideos.deathM1,
        description:
          'Delivers swift, precise slashes with his cursed sickle, each strike releasing a chilling spectral aura that drains life from his foes.',
        name: 'Basic Attack [M1]',
        stats: {
          baseDMG: 18.88,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 1,
        },
      },
      {
        id: 2,
        attachment: specSkillVideos.deathZ,
        description:
          'Leaps forward with a powerful downward slice, shattering the ground upon impact and sending a wave of spectral energy that damages enemies in front.',
        name: `Soul Sever [Z]`,
        stats: {
          baseDMG: 27.36,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 1,
        },
      },
      {
        id: 3,
        attachment: specSkillVideos.deathX,
        description:
          'Vanishes into shadows and reappears behind the target, spinning in a deadly arc that cuts through all nearby enemies in a whirl of death.',
        name: 'Death Bloom [X]',
        stats: {
          baseDMG: 32.96,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 1,
        },
      },
      {
        id: 4,
        attachment: specSkillVideos.deathC,
        description:
          'Channels the sorrow of the moon into a devastating swing, unleashing a spectral tornado that travels forward and tears through anything in its path.',
        isContinuous: true,
        name: `Moon Tear [C]`,
        stats: {
          baseDMG: 9.6,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 11,
        },
      },
      {
        id: 5,
        attachment: specSkillVideos.deathV,
        description:
          'Unleashes a flurry of merciless slashes, his movements becoming a blur as he dances through enemies in front, leaving nothing but silence in his wake.',
        name: 'Execution [V]',
        stats: {
          baseDMG: 4.32,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 13,
        },
      },
      {
        id: 6,
        attachment: specSkillVideos.deathF,
        name: 'Whistle of The Reaper [F]',
        description:
          'Moves with terrifying speed, appearing and disappearing between slashes as if blinking through space—cutting down all who stand too close.',
        stats: {
          baseDMG: 8.16,
          damageType: DAMAGE_TYPES.blade,
          hitCount: 18,
        },
      },
    ],
    attachment: specImages.death,
    description: `<p>Death looms as a relentless adversary to Puss in Boots, a figure cloaked in menace and dark purpose. His presence commands fear, his movements deliberate and chillingly precise.</p> <p>He wields shadows and necrotic energy with deadly skill, conjuring dark tendrils and lethal forces that crush opponents under the weight of his inescapable power.</p>`,
    isGatcha: false,
    name: 'Death',
    rarity: RARITIES.exotic,
    sources: ['deathSpec'],
    stats: {
      damageType: DAMAGE_TYPES.blade.name,
      baseDMG: 19,
      perStat: 0.217,
    },
    type: TYPES.spec,
  },
};

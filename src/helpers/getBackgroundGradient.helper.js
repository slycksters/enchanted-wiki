/**
 * The gradient uses lighter color blending to make the primary color only slightly visible.
 * @param {string} color - The main starting color.
 * @param {"Up" | "Down" | "Left" | "Right"} [to="Down"] - Direction of the main gradient flow.
 * @returns {string} CSS gradient string.
 *
 * * Returns a themed gradient with a *soft, subtle* C-shaped fading effect.
 */

export const getBackgroundGradient = (color, to = 'Down') => {
  let degree;
  let baseOpacity = 25;
  let midOpacity = 10;

  switch (to) {
    case 'Up':
      degree = '0deg';
      break;
    case 'Right':
      degree = '90deg';
      break;
    case 'Left':
      degree = '270deg';
      break;
    case 'Down':
    default:
      degree = '180deg';
      break;
  }

  if (['var(--enchanted-rarity-v2)', 'var(--enchanted-rarity-secret)'].includes(color)) {
    baseOpacity = 100;
    midOpacity = 50;
  }

  // Softer gradient — color influence reduced
  return `linear-gradient(
    ${degree},
    color-mix(in srgb, ${color} ${baseOpacity}%, var(--enchanted-overlay-transparent)) 0%,
    color-mix(in srgb, ${color} ${midOpacity}%, var(--enchanted-overlay-transparent)) 20%,
    var(--enchanted-overlay-transparent) 100%
  )`;
};

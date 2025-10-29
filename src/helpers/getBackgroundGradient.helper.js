/**
 * getBackgroundGradient
 * ----------------------
 * Returns a themed gradient with a *soft, subtle* C-shaped fading effect.
 *
 * @param {string} color - The main starting color.
 * @param {"Up" | "Down" | "Left" | "Right"} [to="Down"] - Direction of the main gradient flow.
 * @returns {string} CSS gradient string.
 *
 * The gradient uses lighter color blending to make the primary color only slightly visible.
 */

export const getBackgroundGradient = (color, to = "Down") => {
  let degree;

  switch (to) {
    case "Up":
      degree = "0deg";
      break;
    case "Right":
      degree = "90deg";
      break;
    case "Left":
      degree = "270deg";
      break;
    case "Down":
    default:
      degree = "180deg";
      break;
  }

  // Softer gradient — color influence reduced
  return `linear-gradient(
    ${degree},
    color-mix(in srgb, ${color} 25%, transparent) 0%,
    color-mix(in srgb, ${color} 10%, var(--enchanted-bg-accent)) 20%,
    var(--enchanted-bg-accent) 40%,
    var(--enchanted-bg-secondary) 70%,
    var(--enchanted-bg-primary) 100%
  )`;
};

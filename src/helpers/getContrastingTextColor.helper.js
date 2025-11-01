/**
 * A robust helper function to calculate the contrasting text color (dark or light) 
 * for any valid CSS background color string.
 * @param {string} color - The background color string (e.g., '#FFF', 'rgb(255,0,0)', 'rgba(0,0,0,0.5)', 'white').
 * @returns {string} - Returns 'var(--enchanted-bg-primary)' (dark) or 'var(--enchanted-text-primary)' (light).
 */
export const getContrastingTextColor = (color) => {
  // Return a default for invalid input
  const defaultTextColor = 'var(--enchanted-text-primary)';
  if (!color) return defaultTextColor;

  // If the color is in a name format, we need the browser to convert it for us
  // We create a temporary element, apply the color, and get the computed style
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  
  // The computed color will be in 'rgb(r, g, b)' or 'rgba(r, g, b, a)' format
  const computedColor = window.getComputedStyle(tempDiv).color;
  
  // Clean up the temporary element
  document.body.removeChild(tempDiv);
  
  // Extract the R, G, B values from the computed color string
  const rgb = computedColor.match(/\d+/g);
  
  if (!rgb) return defaultTextColor; // Fallback if parsing fails

  const [r, g, b] = rgb.map(Number);

  // Calculate luminance using the WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? 'var(--enchanted-bg-primary)' : defaultTextColor;
};
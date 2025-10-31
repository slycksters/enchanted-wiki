import { getManilaNow } from './getManilaTime.helper';

/**
 * Calculates the next target timestamp based on a repeating interval in minutes.
 * The calculation is done using Manila time.
 *
 * @param {number} every - The interval in minutes for the next target (e.g., 5, 15, 30).
 * @returns {number} The timestamp (in milliseconds) of the next target time.
 */
export const calculateNextTarget = (every) => {
  const now = getManilaNow();
  const currentMinutes = now.getMinutes();
  const nextIntervalMinute = Math.ceil(currentMinutes / every) * every;

  const nextTarget = new Date(now);
  nextTarget.setSeconds(0);
  nextTarget.setMilliseconds(0);

  if (nextIntervalMinute >= 60) {
    nextTarget.setHours(nextTarget.getHours() + 1);
    nextTarget.setMinutes(0);
  } else {
    nextTarget.setMinutes(nextIntervalMinute);
  }

  return nextTarget.getTime();
};

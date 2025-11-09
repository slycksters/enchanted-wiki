import { getManilaNow } from './getManilaTime.helper';

/**
 * Calculates the next target timestamp based on a repeating array of minutes.
 * This version is robust against edge cases and includes a safety buffer.
 *
 * @param {number[]} intervals - An array of minute marks in an hour (e.g., [15, 30, 45, 60]).
 * @returns {number} The timestamp (in milliseconds) of the next target time.
 */
export const calculateNextTarget = (intervals) => {
  const now = getManilaNow();
  const currentMinutes = now.getMinutes();

  // Find the first interval that is strictly greater than the current minute.
  let nextIntervalMinute = intervals.find((minute) => minute > currentMinutes);

  const nextTarget = new Date(now);
  nextTarget.setSeconds(0);
  nextTarget.setMilliseconds(0);

  // If no interval was found in the current hour, it means we need to go to the next hour.
  if (nextIntervalMinute === undefined) {
    // Go to the next hour
    nextTarget.setHours(nextTarget.getHours() + 1);
    // And set the minutes to the first interval in the list
    // (handle the 60 => 0 case)
    const firstInterval = intervals[0];
    nextTarget.setMinutes(firstInterval === 60 ? 0 : firstInterval);
  } else {
    // An interval was found in the current hour.
    // Handle the special case where the next interval is exactly 60.
    if (nextIntervalMinute === 60) {
      // Go to the next hour and set minutes to 0.
      nextTarget.setHours(nextTarget.getHours() + 1);
      nextTarget.setMinutes(0);
    } else {
      // It's a regular interval in the current hour.
      nextTarget.setMinutes(nextIntervalMinute);
    }
  }

  // Add a small safety buffer (e.g., 200ms) to prevent race conditions
  // where the component re-renders just as the target time is passing.
  return nextTarget.getTime() + 200;
};
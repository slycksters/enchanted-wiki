/**
 * Returns the current date and time in Manila (Philippines) timezone.
 *
 * @returns {Date} A Date object representing the current time in Manila.
 */
export const getManilaNow = () =>
  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));

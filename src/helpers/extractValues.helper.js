/**
 * Extracts all values from the given object and returns them as an array.
 *
 * @param {Object} object - The object whose values are to be extracted.
 * @returns {Array} An array containing all the values of the object.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * extractValues(obj); // returns [1, 2]
 */
export const extractValues = (object) => Object.values(object);
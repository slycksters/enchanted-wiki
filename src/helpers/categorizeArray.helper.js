import { TYPES } from '../data';

// Helper to convert "Passive Skills" -> "passiveSkills"
const toCamelCase = (str) => {
  return str
    .replace(/\s(.)/g, (_, group1) => group1.toUpperCase()) // Uppercase first letter after space
    .replace(/\s/g, '') // Remove spaces
    .replace(/^(.)/, (_, group1) => group1.toLowerCase()); // Lowercase first letter
};

export const categorizeArray = (array) => {
  return Object.values(array).map((data) => ({
    id: data.id,
    name: data.name,
    type: TYPES[toCamelCase(data.type.name)],
  }));
};
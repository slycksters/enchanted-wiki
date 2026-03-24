export const extractNumber = (value) => {
  if (typeof value !== "string") return null;

  const match = value.match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : null;
};
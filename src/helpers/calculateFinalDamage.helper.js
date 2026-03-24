export const calculateFinalDamage = (stats, skillPoints = 0, multiplier = 1) => {
  if (!stats) return null;
  if (!multiplier || multiplier === 0) multiplier = 1;
  const parsedBaseDamage = Number(stats.baseDMG * stats.hitCount);
  const parsedSkillPoints = Number(skillPoints);
  const parsedMultiplier = Number(multiplier) > 1 ? Number(multiplier) - 1 : Number(multiplier);
  const perStatDamageGrowth = Number(stats.perStat);

  const modifiedBase = parsedBaseDamage + (perStatDamageGrowth * parsedSkillPoints);
  return Math.round(modifiedBase * parsedMultiplier);
};
import { useMemo } from 'react';
import styles from './StatOutput.module.css';
import { calculateFinalDamage, extractNumber, toCamelCase } from '@helpers';

export const StatOutput = ({ allocatedStatPoints, characterData }) => {
  const { combatStyle, race, trait } = characterData;
  const hasData = combatStyle && Object.keys(combatStyle).length > 0;

  const totalDamageMultiplier = useMemo(() => {
    const raceDamageMultiplier = extractNumber(race?.stats?.DMG) ?? 0;
    const traitDamageMultiplier = extractNumber(trait?.stats?.DMG) ?? 0;
    return raceDamageMultiplier + traitDamageMultiplier;
  }, [race, trait]);

  return (
    <section className={styles.statOutputSection}>
      <label>Stat Output</label>

      <div className={styles.statOutputTable}>
        {hasData ? (
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Base Damage</th>
                <th>Combo Hits</th>
                <th>Perfect Combo Base Damage</th>
                <th>Final Damage</th>
              </tr>
            </thead>
            <tbody>
              {combatStyle.abilities.map((ability) => {
                const baseDMG = ability.stats?.baseDMG ?? 0;
                const hitCount = ability.stats?.hitCount ?? 0;
                const statPoint = Number(
                  allocatedStatPoints[
                    toCamelCase(ability.stats?.damageType.name)
                  ]
                );
                const comboDamage = Number(baseDMG * hitCount).toFixed(2);
                const computedFinalDamage = calculateFinalDamage(
                  { ...ability.stats, perStat: combatStyle.stats?.perStat },
                  statPoint,
                  totalDamageMultiplier
                );

                return (
                  <tr key={ability.id}>
                    <td>{ability.name}</td>
                    <td>{baseDMG}</td>
                    <td>{hitCount}</td>
                    <td>{comboDamage}</td>
                    <td>{computedFinalDamage}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className={styles.verbiage}>
            Select a combat style to display computed data
          </div>
        )}
      </div>
    </section>
  );
};

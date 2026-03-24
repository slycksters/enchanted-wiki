import styles from './BaseStat.module.css';

// Helper components
const StatRow = ({ label, value, isSubRow = false }) => (
  <div className={isSubRow ? styles.statSubRow : styles.statRow}>
    <label>{label}: </label>
    <span>{value ?? 'N/A'}</span>
  </div>
);

export const BaseStat = ({ characterData, sections }) => {
  return (
    <section className={styles.statSection}>
      <label>Base Stats</label>
      <div>
        {sections.map((section) => {
          const currentData = characterData[section.id] || {};

          return (
            <div key={section.id} className={styles.statWrapper}>
              {/* Main Label */}
              <StatRow
                label={section.label}
                value={currentData.name || 'None'}
              />

              {/* Dynamic Stats */}
              {section.displayStats.map((stat) => (
                <StatRow
                  key={stat.key}
                  label={stat.label}
                  value={currentData.stats?.[stat.key]}
                  isSubRow={true}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

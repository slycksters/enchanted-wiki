import styles from '../Abilities.module.css';

export const StatsComponent = ({ selectedCard }) => {
  return (
    <div className={styles.statsComponentContainer}>
      <div className={styles.statsHeader}>
        <p className={styles.statsHeaderTitle}>{selectedCard.label}</p>
        <img alt={selectedCard.label} src={selectedCard.image} />
      </div>

      <div className={styles.statsContent}>
        {/* Rate */}
        <section>
          <label>Rate: </label>
          <ul>
            <li>
              <span>
                {selectedCard.rarity} ({selectedCard.rate})
              </span>
            </li>
          </ul>
        </section>

        {/* Description */}
        {selectedCard.descriptions && (
          <section>
            <label>Description:</label>
            <ul>
              {selectedCard.descriptions.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </section>
        )}

        {/* <section>
          <label>Obtainable from:</label>
        </section> */}
      </div>
    </div>
  );
};

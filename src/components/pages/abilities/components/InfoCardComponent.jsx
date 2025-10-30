import styles from '../Abilities.module.css';

export const InfoCardComponent = ({ data }) => {
  return (
    <div className={styles.statsComponentContainer}>
      <div className={styles.statsHeader}>
        <img alt={data.label} src={data.image} />
      </div>

      <div className={styles.statsContent}>
        {/* Rate */}
        <section>
          <label>Rate: </label>
          <ul>
            <li>
              <span>
                {data.rarity} ({data.rate})
              </span>
            </li>
          </ul>
        </section>

        {/* Description */}
        {data.descriptions && (
          <section>
            <label>Description:</label>
            <ul>
              {data.descriptions.map((description) => (
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

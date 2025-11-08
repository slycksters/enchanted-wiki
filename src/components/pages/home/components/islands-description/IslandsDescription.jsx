import styles from '../../Home.module.css';

export const IslandsDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.category}>
        <h3>Islands</h3>

        <p>
          Islands are areas where players can grind, explore, and face
          challenges. Each island has a corresponding level range, guiding
          players as they progress to higher-level islands.
        </p>

        <small className={styles.note}>
          Advancing to higher-level islands unlocks new features,
          including:
        </small>
        <ul>
          <li>Dungeons and Trials for greater challenges</li>
          <li>Stronger World Bosses to defeat</li>
          <li>Specs and Weapon NPCs offering more powerful items</li>
        </ul>
      </div>
    </main>
  );
};

import styles from '../../Home.module.css';

export const ItemsDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.category}>
        <h3>Items</h3>

        <p>
          Items are essential for progression, providing stat boosts, utility
          functions, and materials for crafting and upgrades. There are three
          main categories, each serving a unique purpose.
        </p>
      </div>

      <div className={'row g-3'}>
        <section className={'col col-12 col-md-4'}>
          <div className={styles.categoryItem}>
            <h4>Accessories</h4>

            <p>
              Items that provide bonus stats, helping to improve your
              character's combat performance and overall power.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-4'}>
          <div className={styles.categoryItem}>
            <h4>Artifacts</h4>

            <p>
              Utility items that assist players in various ways, such as
              teleporting, spawning bosses, or accessing dungeons.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-4'}>
          <div className={styles.categoryItem}>
            <h4>Materials</h4>

            <p>
              Items used for crafting Specs, Weapons, and upgrading skills like
              mining, as well as items that can be sold for profit.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

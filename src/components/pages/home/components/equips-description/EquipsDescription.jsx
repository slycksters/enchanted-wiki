import styles from '../../Home.module.css';

export const EquipsDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.category}>
        <h3>Equips</h3>

        <p>
          Equips enhance your combat capabilities by providing powerful tools
          and special character abilities. Equips focus on the two main combat
          styles and allow you to customize your fighting strategy.
        </p>
      </div>

      <div className={'row g-3'}>
        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Weapon</h4>

            <p>
              A special weapon that grants unique skills and abilities, helping
              you fight more effectively in battles.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Specs</h4>

            <p>
              Special characters whose abilities can be inherited, giving you
              access to new skills and enhancing your combat potential.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

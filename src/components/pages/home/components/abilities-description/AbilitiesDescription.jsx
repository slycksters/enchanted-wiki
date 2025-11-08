import styles from '../../Home.module.css';

export const AbilitiesDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.category}>
        <h3>Abilities</h3>

        <p>
          Abilities define your character's strengths, combat style, and
          progression. Each ability type contributes differently to how you
          fight and develop in the game.
        </p>
      </div>

      <div className={'row g-3'}>
        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Magic</h4>

            <p>
              One of the three main combat styles. Magic focuses on offensive
              spells that allow you to engage enemies using various magical
              techniques.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Race</h4>

            <p>
              Represents your character's origin. Each race provides stat perks
              that influence your overall performance in combat and progression.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Trait</h4>

            <p>
              A source of additional stat bonuses that further enhance your
              character's overall power.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Passive Magic</h4>

            <p>
              A combat-oriented passive skill that adds effects to your attacks,
              such as increased damage or special elemental properties.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Title</h4>

            <p>
              Earned through in-game achievements, Titles grant bonus EXP and
              Crystal multipliers, marking your accomplishments as you advance
              through the world of <span>Enchanted</span>.
            </p>
          </div>
        </section>

        <section className={'col col-12 col-md-6'}>
          <div className={styles.categoryItem}>
            <h4>Passive Skill</h4>

            <p>
              A utility-based ability that strengthens your magic or grants
              mobility options, improving how you move and fight.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

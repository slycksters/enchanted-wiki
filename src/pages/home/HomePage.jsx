import { enchantedLogo } from '../../assets';
import { CardComponent } from '../../components/ui';
import { cards } from '../../data';
import styles from './Home.module.css';

export const HomePage = () => {
  const containerSettings = { height: '100px', width: '100%' };

  return (
    <div className={styles.homePageContainer}>
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      <section className={styles.developerName}>
        <small>Developed by: Slyckster AKA Zazel</small>
      </section>

      <section className={`${styles.navigationCards} grid grid-cols-4 gap-4`}>
        {cards.map((card) => {
          return (
            <CardComponent
              key={card.id}
              containerSettings={containerSettings}
              iconSettings={{
                label: card.label,
              }}
            />
          );
        })}
      </section>
    </div>
  );
};

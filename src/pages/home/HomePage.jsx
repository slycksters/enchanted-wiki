import styles from './Home.module.css';
import { enchantedLogo } from '../../assets';
import { NavigationCardsComponent } from './components/NavigationCardsComponent';

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      {/* Developer Name */}
      <section className={styles.developerName}>
        <small>Enchanted Wiki Developed by: Slyckster AKA Zazel</small>
      </section>

      {/* Game Description */}
      <section className={styles.description}>
        <p>
          Step into the archives of Enchanted, where magic and adventure
          intertwine. Discover the secrets behind every spell, item, and legend
          that shapes this mystical world.
        </p>
      </section>

      <NavigationCardsComponent />
    </div>
  );
};

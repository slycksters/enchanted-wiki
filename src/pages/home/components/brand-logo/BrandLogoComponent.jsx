import { enchantedLogo } from '../../../../assets';
import styles from './BrandLogo.module.css';

export const BrandLogoComponent = () => {
  return (
    <div className={styles.brand}>
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      <section className={styles.developerName}>
        <small>Enchanted Wiki Developed by: Slyckster AKA Zazel</small>
      </section>
    </div>
  );
};
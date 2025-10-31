import { enchantedLogo } from '@assets';
import styles from './Brand.module.css';

export const Brand = () => {
  return (
    <div className={styles.brand}>
      <section className={styles.imageWrapper}>
        <img alt={'enchanted-logo'} src={enchantedLogo} />
      </section>

      <section className={styles.developerName}>
        <small>Enchanted Wiki Developed by: Slyckster AKA Zazel</small>
      </section>
    </div>
  );
};
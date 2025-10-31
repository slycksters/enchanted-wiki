import { assets } from '@assets';
import { Image } from '@components';
import styles from './Brand.module.css';

export const Brand = () => {
  return (
    <div className={styles.brand}>
      <section className={styles.imageWrapper}>
        <Image alt={'enchanted-logo'} src={assets.logos.enchantedLogo} />
      </section>

      <section className={styles.developerName}>
        <small>Enchanted Wiki Developed by: Slyckster AKA Zazel</small>
      </section>
    </div>
  );
};
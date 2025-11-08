import { assets } from '@assets';
import { Image } from '@components';
import styles from './Brand.module.css';

export const Brand = () => {
  return (
    <section className={styles.brand}>
      <small>Welcome to</small>
      <div className={styles.imageWrapper}>
        <Image alt={'enchanted-logo'} src={assets.logos.enchantedLogo} />
      </div>
      <small>Wiki</small>
    </section>
  );
};
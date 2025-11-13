import { assets } from '@assets';
import { Image } from '@components';
import styles from './Brand.module.css';
import { GradientImage } from './GradientImage';

export const Brand = () => {
  return (
    <section className={styles.brand}>
      <div className={styles.imageWrapper}>
        <Image alt={'enchanted-logo'} src={assets.logos.enchantedLogo} />
        {/* <GradientImage altText={'enchanted-logo'} imageUrl={assets.logos.enchantedLogo} /> */}
      </div>
    </section>
  );
};

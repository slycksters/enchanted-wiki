import { NavLink } from 'react-router-dom';
import { assets } from '@assets';
import { Button, Image } from '@components';
import { BASE_PATH } from '@constants';
import styles from './Utility.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.utilityPageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <Image alt={'enchanted-logo'} src={assets.logos.enchantedLogo} />
      </section>

      <section className={styles.verbiage}>
        <p>Something's is wrong here...</p>
        <p>We can't find the page you're looking for.</p>
        <NavLink to={BASE_PATH}>
          <Button label={'Back to home page'} />
        </NavLink>
      </section>
    </div>
  );
};

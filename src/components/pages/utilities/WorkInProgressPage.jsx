import { NavLink } from 'react-router-dom';
import { assets } from '@assets';
import { Button, Image } from '@components';
import { BASE_PATH } from '@constants';
import styles from './Utility.module.css';

export const WorkInProgressPage = () => {
  return (
    <div
      className={styles.utilityPageContainer}
      style={{ minHeight: 'calc(100vh - 76px)' }}
    >
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <Image alt={'enchanted-logo'} src={assets.logos.enchantedLogo} />
      </section>

      <section className={styles.verbiage}>
        <p>This page is still under construction...</p>
        <p>Feel free to explore our other pages in the meantime!</p>
        <NavLink to={BASE_PATH}>
          <Button label={'Back to home page'} />
        </NavLink>
      </section>
    </div>
  );
};

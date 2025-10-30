import { NavLink } from 'react-router-dom';
import styles from './Utility.module.css';
import { Button } from '../../atoms';
import { enchantedLogo } from '../../../assets';
import { BASE_PATH } from '../../../constants';

export const WorkInProgressPage = () => {
  return (
    <div className={styles.utilityPageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img alt={'enchanted-logo'} src={enchantedLogo} />
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

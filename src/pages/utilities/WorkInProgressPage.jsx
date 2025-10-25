import { NavLink } from 'react-router-dom';
import styles from './Utility.module.css';
import { enchantedLogo } from '../../assets';
import { ButtonComponent } from '../../components';
import { BASE_PATH } from '../../constants';

export const WorkInProgressPage = () => {
  return (
    <div className={styles.utilityPageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      <section className={styles.verbiage}>
        <p>This page is still under construction...</p>
        <p>Feel free to explore our other pages in the meantime!</p>
        <NavLink to={BASE_PATH}>
          <ButtonComponent
            className={styles.button}
            label={'Back to home page'}
          />
        </NavLink>
      </section>
    </div>
  );
};

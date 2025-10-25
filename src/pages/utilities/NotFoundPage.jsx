import { NavLink } from 'react-router-dom';
import styles from './Utility.module.css';
import { enchantedLogo } from '../../assets';
import { ButtonComponent } from '../../components';
import { BASE_PATH } from '../../constants';

export const NotFoundPage = () => {
  return (
    <div className={styles.utilityPageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      <section className={styles.verbiage}>
        <p>Something's is wrong here...</p>
        <p>We can't find the page you're looking for.</p>
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

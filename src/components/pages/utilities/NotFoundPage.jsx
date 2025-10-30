import { NavLink } from 'react-router-dom';
import styles from './Utility.module.css';
import { Button } from '../../atoms';
import { enchantedLogo } from '../../../assets';
import { BASE_PATH } from '../../../constants';

export const NotFoundPage = () => {
  return (
    <div className={styles.utilityPageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img alt={'enchanted-logo'} src={enchantedLogo} />
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

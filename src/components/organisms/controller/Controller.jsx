import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styles from './Controller.module.css';
import { enchantedSmallLogo } from '../../../assets';
import { BASE_PATH } from '../../../constants';

export const Controller = ({ onClickHamburger }) => {
  return (
    <div className={styles.controllerWrapper}>
      <Link to={BASE_PATH}>
        <img alt={'enchanted-small-logo'} src={enchantedSmallLogo} />
      </Link>

      <div className={styles.hamburgerIcon} onClick={onClickHamburger}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

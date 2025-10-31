import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { assets } from '@assets';
import { Image } from '@components';
import { BASE_PATH } from '@constants';
import styles from './Controller.module.css';

export const Controller = ({ onClickHamburger }) => {
  return (
    <div className={styles.controllerWrapper}>
      <Link to={BASE_PATH}>
        <Image alt={'enchanted-small-logo'} src={assets.logos.enchantedSmallLogo} />
      </Link>

      <div className={styles.hamburgerIcon} onClick={onClickHamburger}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

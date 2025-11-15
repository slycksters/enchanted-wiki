import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { assets } from '@assets';
import { Image } from '@components';
import { BASE_PATH } from '@constants';
import styles from './Controller.module.css';
import { SearchModal } from '../search-modal';

export const Controller = ({ onClickHamburger }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.controllerWrapper}>
      <Link to={BASE_PATH}>
        <Image alt={'reign-studio-logo'} className={styles.logo} src={assets.logos.reignStudioLogo} />
      </Link>

      <div className={'d-flex'}>
        <button
          aria-label={'Search'}
          className={styles.searchButton}
          onClick={() => setIsModalOpen(!isModalOpen)}
          type={'button'}
        >
          <IoMdSearch size={22} />
        </button>
        <div className={styles.hamburgerIcon} onClick={onClickHamburger}>
          <GiHamburgerMenu />
        </div>
      </div>

      {isModalOpen && (
        <SearchModal onHide={() => setIsModalOpen(false)} show={isModalOpen} />
      )}
    </div>
  );
};

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import clsx from 'clsx';
import { assets } from '@assets';
import { Image, SearchModal } from '@components';
import { BASE_PATH, PAGE_LINKS } from '@constants';
import { getBackgroundGradient } from '@helpers';
import { useWindowWidth } from '@hooks';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const windowWidth = useWindowWidth();
  const isMobileOrTablet = windowWidth <= 1024;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.navigationContainer}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <NavLink to={BASE_PATH}>
          <Image src={isMobileOrTablet ? assets.logos.enchantedSmallLogo : assets.logos.enchantedLogo} />
        </NavLink>
      </div>

      {/* Page Links */}
      <div className={styles.navList}>
        <div className={styles.search}>
          <button
            aria-label={'Search'}
            onClick={() => setIsModalOpen(!isModalOpen)}
            type={'button'}
          >
            <IoMdSearch size={16} />
            Search
          </button>
        </div>
        {PAGE_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                clsx(styles.navItem, { [styles.activeNavItem]: isActive })
              }
              key={link.id}
              style={({ isActive }) => ({
                background: isActive
                  ? getBackgroundGradient(
                      `var(--enchanted-color-blue)`,
                      'Up'
                    )
                  : null,
              })}
              to={link.path}
            >
              {isMobileOrTablet ? <Icon size={22} /> : link.name}
            </NavLink>
          );
        })}
      </div>

      {isModalOpen && <SearchModal onHide={() => setIsModalOpen(false)} show={isModalOpen} />}
    </div>
  );
};

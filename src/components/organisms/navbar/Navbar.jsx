import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { assets } from '@assets';
import { Image } from '@components';
import { BASE_PATH, PAGE_LINKS } from '@constants';
import { getBackgroundGradient } from '@helpers';
import { useWindowWidth } from '@hooks';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const windowWidth = useWindowWidth();
  const isMobileOrTablet = windowWidth <= 1024;

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
        {PAGE_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                clsx(styles.navItem, { [styles.activeNavItem]: isActive })
              }
              key={link.id}
              style={({ isActive }) => ({
                width: !isMobileOrTablet ? '100px' : null,
                background: isActive
                  ? getBackgroundGradient(
                      `var(--enchanted-rarity-exotic)`,
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
    </div>
  );
};

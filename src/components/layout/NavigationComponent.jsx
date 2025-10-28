import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { enchantedLogo, enchantedSmallLogo } from '../../assets';
import { BASE_PATH, PAGE_LINKS } from '../../constants';

export const NavigationComponent = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // --- Handle screen width detection
  useEffect(() => {
    const checkWidth = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    checkWidth(); // Initial check
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className={styles.navigationContainer}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <NavLink to={BASE_PATH}>
          <img src={isMobileOrTablet ? enchantedSmallLogo : enchantedLogo} />
        </NavLink>
      </div>

      {/* Page Links */}
      <div className={styles.navList}>
        {PAGE_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.activeNavItem : ''}`
              }
              key={link.id}
              style={{ width: !isMobileOrTablet ? '100px' : null }}
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

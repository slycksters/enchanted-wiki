import { useEffect } from 'react';
import styles from './Home.module.css';
import { AvatarComponent, BrandLogoComponent, NavLinkComponent, Timer } from './components';

export const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homePageContainer}>
      {/* Navigation Links */}
      <NavLinkComponent />
      {/* Brand Logo and Developer Name */}
      <BrandLogoComponent />
      {/* Avatar Display */}
      <AvatarComponent />
      {/* Timer Wrapper */}
      <div className={styles.rightPanel}>
        {/* <Timer /> */}
      </div>
    </div>
  );
};

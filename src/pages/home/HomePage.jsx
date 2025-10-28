import styles from './Home.module.css';
import { AvatarComponent, BrandLogoComponent, NavLinkComponent, Timer } from './components';

export const HomePage = () => {
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

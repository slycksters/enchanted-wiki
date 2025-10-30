import { useEffect } from 'react';
import styles from './Home.module.css';
import { Avatar, Brand, Navbar, Timer } from './components';

export const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homePageContainer}>
      {/* Navigation Links */}
      <Navbar />
      {/* Brand Logo and Developer Name */}
      <Brand />
      {/* Avatar Display */}
      <Avatar />
      {/* Timer Wrapper */}
      <div className={styles.rightPanel}>
        {/* <Timer /> */}
      </div>
    </div>
  );
};

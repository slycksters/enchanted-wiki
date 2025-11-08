import { useEffect } from 'react';
import {
  AbilitiesDescription,
  Avatar,
  Brand,
  EquipsDescription,
  Footer,
  Introduction,
  IslandsDescription,
  ItemsDescription,
  Navbar,
  Timer,
  WorldFeaturesDescription,
} from './components';
import styles from './Home.module.css';

export const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${styles.homePageContainer}`}>
      <div className={'container'}>
        <Navbar />
        <Brand />
        <Introduction />
        <AbilitiesDescription />
        <EquipsDescription />
        <ItemsDescription />
        <IslandsDescription />
        <WorldFeaturesDescription />
        <Footer />
      </div>
    </div>
  );
};

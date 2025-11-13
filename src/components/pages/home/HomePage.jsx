import { useEffect, useRef, useState } from 'react';
import {
  AbilitiesDescription,
  Brand,
  EquipsDescription,
  Footer,
  Introduction,
  IslandsDescription,
  ItemsDescription,
  Timer,
  Navbar,
  WorldFeaturesDescription,
} from './components';
import styles from './Home.module.css';
import AnimatedBackground from './components/animated-background/AnimatedBackground';
// import { Navbar } from '@components/organisms';

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
    else window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = scrollRef.current || window;

    const handleScroll = () => {
      const isScrolled = el === window ? window.scrollY > 20 : el.scrollTop > 20;
      setScrolled(isScrolled);
    };

    // Set initial state
    handleScroll();

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.scrollable} ref={scrollRef}>
        {/* <AnimatedBackground /> */}

        <div
          className={styles.stickyNavbar}
          style={{
            backgroundColor: scrolled
              ? 'var(--enchanted-bg-primary)'
              : 'transparent',
            borderBottom: scrolled ? '1px solid var(--enchanted-border-color)' : null,
            transition: 'background-color 0.3s ease',
          }}
        >
          <Navbar />
        </div>

        <Brand />
        <Introduction />
        <Timer />
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

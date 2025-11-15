import { NavLink } from 'react-router-dom';
import { GAME_NAME } from '@constants';
import styles from './Introduction.module.css';

export const Introduction = () => {
  const ENCHANTED_ROBLOX_ID = 104841814414402;

  const openEnchantedInRoblox = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device
      const intentUrl = `intent://placeId=${ENCHANTED_ROBLOX_ID}#Intent;scheme=roblox;package=com.roblox.client;end`;
      window.location.href = intentUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      const appUrl = `roblox://placeId=${ENCHANTED_ROBLOX_ID}`;
      const fallbackUrl = `https://www.roblox.com/games/${ENCHANTED_ROBLOX_ID}`;

      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 1500);
    } else {
      // Desktop fallback
      window.location.href = `roblox://placeId=${ENCHANTED_ROBLOX_ID}`;
    }
  };

  return (
    <div className={styles.introduction}>
      <p>
        Welcome to <span>{GAME_NAME}</span>!
      </p>

      <p>
        Dive into a world of magic and mayhem inspired by your favorite anime
        like Fairy Tail and Grand Piece Online. Your adventure is all about
        bashing bandits, mastering incredible magic, and exploring a world
        packed with action.
      </p>
      <div>
        <button className={styles.playButton} onClick={openEnchantedInRoblox}>
          Play
        </button>

        <NavLink
          target={'_blank'}
          to={`https://www.roblox.com/games/${ENCHANTED_ROBLOX_ID}`}
        >
          <button className={styles.viewButton}>View</button>
        </NavLink>
      </div>
    </div>
  );
};

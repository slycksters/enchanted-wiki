import { NavLink } from 'react-router-dom';
import { GAME_NAME } from '@constants';
import styles from './Introduction.module.css';

export const Introduction = () => {
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

      {/* <p>
        The fighting is fast, fun, and all about timing. Unleash devastating
        magics from afar or get up close and personal with melee attacks. Train
        hard, grow stronger, and become legendary.
      </p> */}

      <NavLink
        target={'_blank'}
        to={'https://www.roblox.com/games/104841814414402'}
      >
        <button className={styles.playButton}>Play</button>
      </NavLink>
    </div>
  );
};

import styles from './Timer.module.css';
import { EVENT_TIMERS } from '../../constants/eventTimers.constant';
import { ReactCountdown } from '../../../../atoms';

export const Timer = () => {
  return (
    <section className={styles.timerSection}>
      <p>Boss Timers:</p>
      {Object.values(EVENT_TIMERS.bosses).map((boss) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdown label={boss.name} subLabel={boss.location} />
          </div>
        )
      })}

      <p>Dungeon Timers:</p>
      {Object.values(EVENT_TIMERS.dungeons).map((dungeon) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdown label={dungeon.name} subLabel={dungeon.location} />
          </div>
        )
      })}
    </section>
  );
};
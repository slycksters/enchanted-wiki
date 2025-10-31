import styles from './Timer.module.css';
import { ReactCountdown } from '@components';
import { extractValues } from '@helpers';
import { EVENT_TIMERS } from '../../constants/eventTimers.constant';

export const Timer = () => {
  return (
    <section className={styles.timerSection}>
      <p>Boss Timers:</p>
      {extractValues(EVENT_TIMERS.bosses).map((boss) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdown label={boss.name} subLabel={boss.location} />
          </div>
        )
      })}

      <p>Dungeon Timers:</p>
      {extractValues(EVENT_TIMERS.dungeons).map((dungeon) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdown label={dungeon.name} subLabel={dungeon.location} />
          </div>
        )
      })}
    </section>
  );
};
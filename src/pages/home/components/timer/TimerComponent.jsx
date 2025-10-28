import { ReactCountdownComponent } from '../../../../components';
import { EVENT_TIMERS } from '../../constants/eventTimers.constant';
import styles from './Timer.module.css';

export const Timer = () => {
  return (
    <section className={styles.timerSection}>
      <p>Boss Timers:</p>
      {Object.values(EVENT_TIMERS.bosses).map((boss) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdownComponent label={boss.name} subLabel={boss.location} />
          </div>
        )
      })}

      <p>Dungeon Timers:</p>
      {Object.values(EVENT_TIMERS.dungeons).map((dungeon) => {
        return (
          <div className={'mt-5'}>
            <ReactCountdownComponent label={dungeon.name} subLabel={dungeon.location} />
          </div>
        )
      })}
    </section>
  );
};
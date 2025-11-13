import styles from './Timer.module.css';
import { ReactCountdown } from '@components';
import { extractValues } from '@helpers';
import { EVENT_TIMERS } from '../../constants/eventTimers.constant';

export const Timer = () => {
  const allTimers = [
    ...extractValues(EVENT_TIMERS.bosses),
    ...extractValues(EVENT_TIMERS.dungeons),
  ];

  return (
    <section className={styles.timer}>
      <h2>World Boss & Dungeon Timers</h2>
      <p>Click the time box to enable the alarm sound.</p>

      <div className={styles.timerWrapper}>
        {allTimers.map((timer, index) => (
          <div key={`timer-${timer.id}-${timer.name}`} style={{ boxShadow: 'var(--enchanted-box-shadow)' }}>
            <ReactCountdown
              intervals={timer.intervals}
              label={timer.name}
              subLabel={timer.location}
              width={'150px'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

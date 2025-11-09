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
      <h3>World Boss & Dungeon Timers</h3>
      <p>Click the time box to enable the alarm sound.</p>

      <div className={styles.timerWrapper}>
        {allTimers.map((timer) => (
          <ReactCountdown
            key={`timer-${timer.id}-${timer.name}`}
            intervals={timer.intervals}
            label={timer.name}
            subLabel={timer.location}
            width={'150px'}
          />
        ))}
      </div>
    </section>
  );
};

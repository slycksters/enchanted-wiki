import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ReactCountdown } from '@components';
import { extractValues } from '@helpers';
import styles from './Timer.module.css';
import { EVENT_TIMERS } from '../../constants/eventTimers.constant';
import { useWindowWidth } from '@hooks';

export const Timer = () => {
  const [openTimers, setOpenTimers] = useState(true);
  const windowWidth = useWindowWidth();

  const allTimers = [
    ...extractValues(EVENT_TIMERS.bosses),
    ...extractValues(EVENT_TIMERS.dungeons),
  ];

  useEffect(() => {
    setOpenTimers(windowWidth > 1024);
  }, [windowWidth]);

  return (
    <React.Fragment>
      <button
        className={styles.toggleTimerButton}
        onClick={() => setOpenTimers(!openTimers)}
      >
        Click to show timers
      </button>
      <section
        className={clsx(
          styles.timer,
          openTimers ? styles.showTimer : styles.hideTimer
        )}
      >
        <h2>World Boss & Dungeon Timers</h2>
        <p>Click the time box to enable the alarm sound.</p>

        <div className={styles.timerWrapper}>
          {allTimers.map((timer) => (
            <div
              key={`timer-${timer.id}-${timer.name}`}
              style={{ boxShadow: 'var(--enchanted-box-shadow)' }}
            >
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
    </React.Fragment>
  );
};

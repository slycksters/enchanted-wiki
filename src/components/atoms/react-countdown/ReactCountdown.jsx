import { useState } from 'react';
import Countdown from 'react-countdown';
import styles from './ReactCountdown.module.css';
import { calculateNextTarget } from './helpers';

// --- Custom time render
const timeRenderer = ({ minutes, seconds }) => (
  <div className={styles.timerBoxes}>
    <div className={styles.timeBox}>{minutes.toString().padStart(2, '0')}</div>
    <span className={styles.colon}>:</span>
    <div className={styles.timeBox}>{seconds.toString().padStart(2, '0')}</div>
  </div>
);

// --- Component
export const ReactCountdown = ({ label, subLabel, every = 20, countDown = 5 }) => {
  const [key, setKey] = useState(0);
  const [targetDate, setTargetDate] = useState(() => calculateNextTarget(every));

  // --- Reset timer to count infinitely
  const handleComplete = () => {
    const next = Date.now() + countDown * 60 * 1000;
    setTargetDate(next);
    setKey((prev) => prev + 1);
  };

  return (
    <div className={styles.reactCountdown}>
      <div className={styles.label}>{label ?? 'Countdown'}</div>
      <div className={styles.subLabel}>{subLabel}</div>
      <Countdown
        key={key}
        date={targetDate}
        intervalDelay={1000}
        onComplete={handleComplete}
        renderer={timeRenderer}
      />
    </div>
  );
};

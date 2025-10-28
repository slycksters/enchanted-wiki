import { useState } from 'react';
import Countdown from 'react-countdown';
import styles from './ReactCountdown.module.css';

// --- Custom time render
const timeRenderer = ({ minutes, seconds }) => (
  <div className={styles.timerBoxes}>
    <div className={styles.timeBox}>{minutes.toString().padStart(2, '0')}</div>
    <span className={styles.colon}>:</span>
    <div className={styles.timeBox}>{seconds.toString().padStart(2, '0')}</div>
  </div>
);

// --- PH Time Format
const getManilaNow = () =>
  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));

// --- Start from certain minutes from the clock
const calculateNextTarget = (every) => {
  const now = getManilaNow();
  const currentMinutes = now.getMinutes();
  const nextIntervalMinute = Math.ceil(currentMinutes / every) * every;

  const nextTarget = new Date(now);
  nextTarget.setSeconds(0);
  nextTarget.setMilliseconds(0);

  if (nextIntervalMinute >= 60) {
    nextTarget.setHours(nextTarget.getHours() + 1);
    nextTarget.setMinutes(0);
  } else {
    nextTarget.setMinutes(nextIntervalMinute);
  }

  return nextTarget.getTime();
};

// --- Component
export const ReactCountdownComponent = ({ label, subLabel, every = 20, countDown = 5 }) => {
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

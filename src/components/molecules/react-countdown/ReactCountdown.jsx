import { useRef, useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import Countdown from 'react-countdown';
import { assets } from '@assets';
import styles from './ReactCountdown.module.css';
import { calculateNextTarget } from './helpers';
import { useSoundEffect } from './hooks';

const soundEffects = assets.audio.soundEffects;

// Global flag to prevent multiple sounds
const globalSoundLock = { current: false };

// --- Custom time render
const timeRenderer = ({ minutes, seconds }, hasSpawned) => (
  <div style={{ fontSize: '14px' }}>
    {hasSpawned ? (
      <span>Spawned</span>
    ) : (
      <>
      <span>{minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}</span>
      </>
    )}
  </div>
);

// --- Component
export const ReactCountdown = ({
  label,
  subLabel,
  intervals = [15, 30, 45, 60],
  width,
}) => {
  const audioRef = useRef(null);
  const [clickPulse, setClickPulse] = useState(false);
  const [hasSpawned, setHasSpawned] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [targetDate, setTargetDate] = useState(() =>
    calculateNextTarget(intervals)
  );

  const [playSoundEffect, stopSoundEffect] = useSoundEffect(
    audioRef,
    globalSoundLock
  );

  // Reset spawned state after 15 seconds
  useEffect(() => {
    if (!hasSpawned) return;
    const spawnTimer = setTimeout(() => setHasSpawned(false), 15000);
    return () => clearTimeout(spawnTimer);
  }, [hasSpawned]);

  // Reset click pulse class after animation ends
  useEffect(() => {
    if (!clickPulse) return;
    const timer = setTimeout(() => setClickPulse(false), 500); // match animation duration
    return () => clearTimeout(timer);
  }, [clickPulse]);

  const handleComplete = useCallback(() => {
    const nextTarget = calculateNextTarget(intervals);
    setTargetDate(nextTarget);
    setHasSpawned(true);
    if (isActive) playSoundEffect();
  }, [intervals, isActive, playSoundEffect]);

  const handleOnClickCountdown = () => {
    setClickPulse(true);
    if (isActive) {
      setIsActive(false);
      stopSoundEffect();
    } else {
      setIsActive(true);
    }
  };

  // Memoize the renderer function to prevent re-creating it on every render
  const renderer = useCallback(
    (params) => timeRenderer(params, hasSpawned),
    [hasSpawned]
  );

  return (
    <div
      className={clsx(
        styles.reactCountdown,
        isActive && styles.activeReactCountdown,
        hasSpawned && styles.pulseAnimation,
        clickPulse && styles.clickPulse
      )}
      onClick={handleOnClickCountdown}
      style={{ width }}
    >
      <div className={styles.label}>{label ?? 'Countdown'}</div>
      <div className={styles.subLabel}>{subLabel}</div>
      <Countdown
        key={targetDate}      
        date={targetDate}
        onComplete={handleComplete}
        renderer={renderer}
      />
      <audio ref={audioRef} hidden src={soundEffects.spawn2()} preload={'auto'} />
    </div>
  );
};
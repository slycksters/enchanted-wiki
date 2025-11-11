import { useEffect, useCallback } from 'react';

/**
 * useSoundEffect Hook
 * --------------------
 * Manages sound effects with a global lock and robust lifecycle management.
 *
 * @param {React.RefObject<HTMLAudioElement>} audioRef - Ref to the audio element.
 * @param {React.RefObject<boolean>} globalSoundLock - Ref for the global lock.
 * @returns {[() => void, () => void]} - [playSoundEffect, stopSoundEffect]
 */
export const useSoundEffect = (audioRef, globalSoundLock) => {
  // Memoize the handler to prevent re-attaching listeners on every render
  const handleSoundEnd = useCallback(() => {
    globalSoundLock.current = false; // Release the global lock
  }, [globalSoundLock]);

  // Effect to manage the audio element and its listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attach the event listener
    audio.addEventListener('ended', handleSoundEnd);

    // Cleanup function: This is crucial to prevent memory leaks
    // It runs when the component unmounts or dependencies change.
    return () => {
      audio.removeEventListener('ended', handleSoundEnd);
      // Also ensure the lock is released on unmount
      if (globalSoundLock.current) {
        globalSoundLock.current = false;
      }
    };
  }, [audioRef, globalSoundLock, handleSoundEnd]);

  const playSoundEffect = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Only play the sound if the global lock is not engaged
    if (!globalSoundLock.current) {
      globalSoundLock.current = true;
      audio.volume = 0.4;
      audio.currentTime = 0;
      audio.play().catch((error) => {
        // Handle potential play errors (e.g., user hasn't interacted with the page)
        console.error('Audio play failed:', error);
        handleSoundEnd(); // Reset state if play fails
      });
    }
  }, [audioRef, globalSoundLock, handleSoundEnd]);

  const stopSoundEffect = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    // Manually trigger the end handler to reset all state
    handleSoundEnd();
  }, [audioRef, handleSoundEnd]);

  return [playSoundEffect, stopSoundEffect];
};
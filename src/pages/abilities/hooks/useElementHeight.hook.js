import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to get the height of an element and update on window resize.
 */
export const useElementHeight = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measureHeight = () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
        console.log(ref.current.clientHeight)
      }
    };

    // Measure initially
    measureHeight();

    // Update on resize
    window.addEventListener('resize', measureHeight);

    // Cleanup
    return () => window.removeEventListener('resize', measureHeight);
  }, []);

  return [ref, height];
};
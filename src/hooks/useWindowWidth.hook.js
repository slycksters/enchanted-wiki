import { useState, useEffect } from 'react';

/**
 * Custom React hook to track the current width of the browser window.
 *
 * @returns {number} The current width of the window in pixels.
 */
export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

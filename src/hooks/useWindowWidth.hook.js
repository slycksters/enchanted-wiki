// src/hooks/useWindowWidth.hook.js
import { useState, useEffect } from 'react';

// A simple check to see if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

/**
 * Custom React hook to track the current width of the browser window.
 * It is now safe to use in Server-Side Rendering (SSR) environments.
 *
 * @returns {number} The current width of the window in pixels, or a default (e.g., 1024) on the server.
 */
export const useWindowWidth = () => {
  // On the server, we don't know the window width, so we return a default.
  // We'll choose a desktop-width default to ensure the server renders the desktop layout.
  const [windowWidth, setWindowWidth] = useState(isBrowser ? window.innerWidth : 1024);

  useEffect(() => {
    // If we're not in a browser, the effect does nothing.
    if (!isBrowser) {
      return;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty dependency array ensures this runs only once on the client after mount.

  return windowWidth;
};
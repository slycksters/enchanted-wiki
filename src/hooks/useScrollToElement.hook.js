// src/hooks/useScrollToActiveElement.hook.js

import { useEffect, useRef } from 'react';
const isBrowser = typeof document !== 'undefined';

/**
 * A custom hook that scrolls an element into the center of a scrollable container
 * when it becomes "active".
 *
 * @param {string} containerId - The ID of the scrollable parent container.
 * @param {boolean} isActive - A flag indicating if this element is the active one.
 * @param {Array} dependencies - Dependencies for the useEffect (e.g., [location.pathname]).
 * @param {object} options - Optional parameters.
 * @param {number} [options.delay=100] - The delay in ms before scrolling.
 * @returns {React.RefObject} A ref to be attached to the target DOM element.
 */
export const useScrollToElement = (
  containerId,
  isActive,
  dependencies = [],
  options = {}
) => {
  const { delay = 100 } = options;
  const elementRef = useRef(null);

  useEffect(() => {
    // Only proceed if this specific element is active
    if (!isBrowser || !isActive) {
      return;
    }

    const container = document.getElementById(containerId);
    const element = elementRef.current;

    if (container && element) {
      const timer = setTimeout(() => {
        const containerHeight = container.offsetHeight;
        const elementTop = element.offsetTop; // Position relative to the scroll container
        const elementHeight = element.offsetHeight;

        // Calculate the ideal scroll position to center the element
        const scrollTop = elementTop - containerHeight / 2 + elementHeight / 2;

        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      }, delay);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [isActive, containerId, delay, ...dependencies]); // Effect dependencies

  return elementRef;
};
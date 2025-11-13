import React from 'react';
import styles from './Gradient.module.css';

// This component accepts the image URL as a prop
export const GradientImage = ({ imageUrl, altText }) => {
  const url = typeof imageUrl === 'function' ? imageUrl() : imageUrl;

  // Create an inline style object to dynamically set the mask image
  const maskStyle = {
    WebkitMaskImage: `url(${url})`, // Note the camelCase for CSS properties
    maskImage: `url(${url})`
  };

  return (
    <div
      className={styles.gradientImageContainer}
      style={maskStyle}
      role="img" // Accessibility: tells screen readers this div is acting as an image
      aria-label={altText} // Accessibility: provides a description
    >
      {/* This div is now a self-contained, reusable component! */}
    </div>
  );
};
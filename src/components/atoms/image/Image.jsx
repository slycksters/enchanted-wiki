/**
 * A wrapper around the native <img> element to handle common logic
 * like lazy loading and providing a consistent API.
 */
export const Image = ({ alt, className, src, ...props }) => {
  const imageUrl = typeof src === 'function' ? src() : src;

  if (!imageUrl) {
    return null;
  }

  return (
    <img
      alt={alt}
      className={className}
      decoding={'async'} // Helps the browser render faster
      loading={'lazy'} // Native browser lazy loading!
      src={imageUrl}
      {...props}
    />
  );
};
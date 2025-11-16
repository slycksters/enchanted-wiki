import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '@assets';
import { GAME_NAME, WEBSITE_NAME } from '@constants';

const formatPathToTitle = (path) => {
  if (!path || path === '/') return '';
  return path
    .substring(1)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const MetaData = ({ info }) => {
  const location = useLocation();

  const pageSpecificTitle = info ? info.name : formatPathToTitle(location.pathname);
  const title = pageSpecificTitle
    ? `${pageSpecificTitle} | ${WEBSITE_NAME}`
    : WEBSITE_NAME;
  
  const metaDescription = info
    ? info.description || `${info.name} details on ${WEBSITE_NAME}`
    : WEBSITE_NAME;
    
  const keywords = `Enchanted, Piece, Enchanted Piece, Wiki, Roblox, Enchanted Roblox, ${GAME_NAME}, ${WEBSITE_NAME}${pageSpecificTitle ? `, ${pageSpecificTitle}` : ''}`;
  
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const ogImage = info?.attachment || assets.logos.enchantedSmallLogo;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {/* --- Standard Meta Tags --- */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      {/* --- Open Graph Tags --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={WEBSITE_NAME} />
    </>
  );
};
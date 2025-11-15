import { useEffect } from 'react';
import { assets } from '@assets';
import { GAME_NAME, WEBSITE_NAME } from '@constants';

export const MetaData = ({ info }) => {
  const title = info ? `${info.name} | ${WEBSITE_NAME}` : WEBSITE_NAME;
  const metaDescription = info
    ? info.description || `${info.name} details on ${WEBSITE_NAME}`
    : WEBSITE_NAME;
  const keywords = `Enchanted, Piece, Enchanted Piece, Wiki, Roblox, Enchanted Roblox, ${GAME_NAME}, ${WEBSITE_NAME} ${info ? `, ${info.name}` : ''}`;
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const ogImage = info ? info.attachment() : assets.logos.enchantedSmallLogo();

  // Fast, guaranteed update for the title
  useEffect(() => {
    document.title = title;
  }, [info?.name]);

  return (
    <>
      {/* --- React 19 Native Meta Tags --- */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      {/* --- Open Graph Tags --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={title} />
    </>
  );
};

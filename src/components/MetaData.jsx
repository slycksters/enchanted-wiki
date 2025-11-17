import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GAME_NAME, WEBSITE_NAME } from '@constants';
import { getItemPath } from '@router/getItemPath.helper';

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
    : 'Enchanted Wiki: your all-in-one database for maps, races, items, enemies, quests, and deep lore of the realms.';
  
  const pageUrl = info ? `${window.location.origin}${getItemPath(info)}` : `${window.location.origin}${location.pathname}`;
  const ogImage = info?.attachment() || `${window.location.origin}/enchanted-small-logo.png`;
  console.log(pageUrl)

  const defaultKeywords = 'Enchanted, Enchanted Roblox, Enchanted Piece, Enchanted Piece Roblox, Enchanted Wiki, Enchanted Piece Wiki, Enchanted Wiki Roblox, Enchanted Piece Wiki Roblox, Enchanted Roblox Wiki, Enchanted Piece Roblox Wiki, Roblox Enchanted, Roblox Enchanted Piece';
  const keywords = pageSpecificTitle
    ? `${GAME_NAME} ${pageSpecificTitle}, ${GAME_NAME} Roblox ${pageSpecificTitle}, Roblox ${GAME_NAME} ${pageSpecificTitle}, ${GAME_NAME} ${pageSpecificTitle} Roblox, Enchanted ${pageSpecificTitle}, Enchanted Roblox ${pageSpecificTitle}, Roblox Enchanted ${pageSpecificTitle}, Enchanted ${pageSpecificTitle} Roblox`
    : defaultKeywords;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {/* --- Standard Meta Tags --- */}
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="type" content="website" />
      <meta name="url" content={pageUrl} />
      <meta name="image" content={ogImage} />
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
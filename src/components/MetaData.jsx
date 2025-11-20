import { useEffect } from 'react';
import { Helmet } from 'react-helmet-next';
import { useLocation } from 'react-router-dom';
import { GAME_NAME, WEBSITE_NAME } from '@constants';
import { getItemPath } from '@router/getItemPath.helper';
import { stripHtml } from '@helpers';

const formatPathToTitle = (path) => {
  if (!path || path === '/') return '';
  // Handle nested paths correctly
  const lastPart = path.split('/').pop();
  return lastPart
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const MetaData = ({ info }) => {
  const location = useLocation();

  const pageSpecificTitle = info
    ? info.name
    : formatPathToTitle(location.pathname);
  const title = pageSpecificTitle
    ? `${pageSpecificTitle} | ${WEBSITE_NAME}`
    : WEBSITE_NAME;

  const rawDescription = info
    ? info.description ||
      `Details for ${info.name} in ${GAME_NAME}. Discover stats, drops, locations, and more.`
    : `The ultimate wiki for ${GAME_NAME}. Your all-in-one database for maps, races, items, enemies, quests, and deep lore of the realms.`;
  const metaDescription = stripHtml(rawDescription).substring(0, 160); // Limit to 160 chars

  const pageUrl = info
    ? `https://www.slyckster.dev${getItemPath(info)}`
    : `https://www.slyckster.dev${location.pathname}`;

  // Use a high-quality default logo
  const defaultImage = `https://www.slyckster.dev/enchanted-small-logo.png`;
  const ogImage = info?.attachment ? info.attachment : defaultImage;

  const defaultKeywords = `Enchanted, Enchanted Roblox, Enchanted Piece, ${GAME_NAME}, Enchanted Wiki, ${WEBSITE_NAME}, Roblox Wiki, Game Wiki`;
  const keywords = pageSpecificTitle
    ? `${pageSpecificTitle}, ${GAME_NAME} ${pageSpecificTitle}, ${defaultKeywords}`
    : defaultKeywords;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      {/* --- Standard Meta Tags --- */}
      <title>{title}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />

      {/* --- Open Graph Tags (for Facebook, Discord, etc.) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={WEBSITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* --- Twitter Card Tags --- */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

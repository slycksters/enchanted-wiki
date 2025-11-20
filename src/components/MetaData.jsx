import { useEffect } from 'react';
import { Helmet } from 'react-helmet-next';
import { useLocation } from 'react-router-dom';
import { GAME_NAME, WEBSITE_NAME } from '@constants';
import { stripHtml } from '@helpers';

const formatPathToTitle = (path) => {
  if (!path || path === '/') return '';
  const lastPart = path.split('/').pop();
  return lastPart
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const MetaData = ({ info }) => {
  const location = useLocation();

  const homepage = 'https://www.slyckster.dev';

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
  const fullStrippedDesc = stripHtml(rawDescription);
  const maxLength = 160;
  let metaDescription;

  if (fullStrippedDesc.length > maxLength) {
    // Truncate and add ellipsis
    metaDescription = fullStrippedDesc.substring(0, maxLength - 3) + '...';
  } else {
    // Use the full description as it's within the limit
    metaDescription = fullStrippedDesc;
  }

  const pageUrl = `${homepage}${
    location.pathname === '/' ? '' : location.pathname
  }`;

  // --- THIS IS THE FIX ---
  let ogImage;
  if (info && typeof info.attachment === 'function') {
    // Call the function to get the relative path (e.g., /assets/face-plaster.a1b2c3.png)
    const relativeImagePath = info.attachment();
    // Prepend the homepage to make it an absolute URL
    ogImage = `${homepage}${relativeImagePath}`;
  } else {
    // Fallback to the default logo (already an absolute URL)
    ogImage = `${homepage}/enchanted-small-logo.png`;
  }
  console.log(ogImage)
  // --- END OF FIX ---

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

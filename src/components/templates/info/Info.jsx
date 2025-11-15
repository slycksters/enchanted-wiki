import { useEffect } from 'react';
// import { Helmet } from 'react-helmet-next';
import {
  Description,
  Drops,
  Gallery,
  Header,
  Skill,
  Sources,
  Ware,
} from './components';
import { Inhabitants } from './components/inhabitants';
import styles from './Info.module.css';
import { assets } from '@assets';

export const Info = ({ info }) => {
  if (!info) return null;

  // Fast, guaranteed update for the title
  useEffect(() => {
    document.title = info.name;
  }, [info.name]);

  // Fallbacks for meta tags
  const metaDescription = info.description || `${info.name} details on Enchanted Wiki`;
  const ogImage = info.attachment() || assets.logos.enchantedSmallLogo();
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className={styles.info}>
      {/* Dynamic Helmet with key to ensure updates on info change */}
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{info.name}</title> */}

        {/* SEO Meta */}
        {/* <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`Enchanted, Wiki, Roblox, ${info.name}`} /> */}

        {/* Open Graph / Social Sharing */}
        {/* <meta property="og:title" content={info.name} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
      </Helmet> */}
      {/* --- React 19 Native Meta Tags --- */}
        <title>{`${info.name} | Enchanted Wiki`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`Enchanted, Wiki, Roblox, Enchanted Wiki, ${info.name}`} />
        
        {/* --- Open Graph Tags --- */}
        <meta property="og:title" content={`${info.name} |Enchanted Wiki`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={`${info.name} | Enchanted Wiki`} />

      {/* Page content */}
      <Header info={info} />
      <Description info={info} />
      <Sources info={info} />
      <Drops info={info} />
      <Ware info={info} />
      <Inhabitants info={info} />
      <Gallery info={info} />
      <Skill info={info} />
    </div>
  );
};

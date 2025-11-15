import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';
import { WorldFeaturesOverview } from './components';

export const WorldFeaturesPage = () => {
  // This page has a simpler route: /world-features/:name
  const { slug } = useParams(); 

  const allWorldFeatures = DATA[TYPES.worldFeature.name];

  const selectedInfo = allWorldFeatures.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} pageOverview={WorldFeaturesOverview} />;
};
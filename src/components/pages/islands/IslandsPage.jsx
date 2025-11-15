import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';
import { IslandsOverview } from './components';

export const IslandsPage = () => {
  const { slug } = useParams();

  const allIslands = DATA[TYPES.island.name];

  const selectedInfo = allIslands.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} pageOverview={IslandsOverview} />;
};
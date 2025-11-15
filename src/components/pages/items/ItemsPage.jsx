import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';
import { ItemsOverview } from './components';

export const ItemsPage = () => {
  const { slug } = useParams();

  const allItems = DATA[TYPES.item.name];

  const selectedInfo = allItems.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} pageOverview={ItemsOverview} />;
};
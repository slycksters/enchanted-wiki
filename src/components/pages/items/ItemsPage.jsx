import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';

export const ItemsPage = () => {
  const { slug } = useParams();

  const allItems = DATA[TYPES.item.name];

  const selectedInfo = allItems.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} />;
};
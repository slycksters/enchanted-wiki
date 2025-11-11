import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';

export const EquipsPage = () => { // Consider renaming this file to EquipsPage.jsx if the component is SpecsPage
  const { slug } = useParams();

  const allEquips = [
    ...DATA[TYPES.weapon.name],
    ...DATA[TYPES.spec.name],
  ];

  const selectedInfo = allEquips.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} />;
};
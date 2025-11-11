import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';

export const AbilitiesPage = () => {
  const { slug } = useParams();

  // Search across all relevant data types for this page
  const allAbilities = [
    ...DATA[TYPES.magic.name],
    ...DATA[TYPES.race.name],
    ...DATA[TYPES.trait.name],
    ...DATA[TYPES.passiveMagic.name],
    ...DATA[TYPES.passiveSkill.name],
    ...DATA[TYPES.title.name],
  ];

  const selectedInfo = allAbilities.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} />;
};
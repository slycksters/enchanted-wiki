import { useParams } from 'react-router-dom';
import { Info } from '@components';
import { DATA } from '@mappers';
import { TYPES } from '@data';
import { NpcsOverview } from './components';

export const NpcsPage = () => {
  const { slug } = useParams();

  const allNpcs = DATA[TYPES.npc.name];

  const selectedInfo = allNpcs.find(
    (item) => item.slug === slug
  );

  return <Info info={selectedInfo} pageOverview={NpcsOverview} />;
};  
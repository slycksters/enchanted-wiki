import { Overview } from '@components';
import {
  NPCS_OVERVIEW,
  NPCS_SECTIONS,
} from '../../constants';

export const NpcsOverview = () => {
  return (
    <Overview
      header={NPCS_OVERVIEW}
      sections={NPCS_SECTIONS}
    />
  );
};

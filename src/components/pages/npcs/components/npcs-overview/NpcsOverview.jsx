import { Overview } from '@components';
import {
  NPCS_OVERVIEW,
  NPCS_SECTIONS,
} from '../../constants';

export const NpcsOverview = () => {
  return (
    <Overview
      title={NPCS_OVERVIEW.title}
      intro={NPCS_OVERVIEW.intro}
      sections={NPCS_SECTIONS}
    />
  );
};

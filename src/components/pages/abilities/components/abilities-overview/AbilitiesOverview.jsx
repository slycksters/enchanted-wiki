import { Overview } from '@components';
import {
  ABILITIES_OVERVIEW,
  ABILITIES_SECTIONS,
} from '../../constants';

export const AbilitiesOverview = () => {
  return (
    <Overview
      header={ABILITIES_OVERVIEW}
      sections={ABILITIES_SECTIONS}
    />
  );
};

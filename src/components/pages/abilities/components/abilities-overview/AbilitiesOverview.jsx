import { Overview } from '@components';
import {
  ABILITIES_OVERVIEW,
  ABILITIES_SECTIONS,
} from '../../constants';

export const AbilitiesOverview = () => {
  return (
    <Overview
      title={ABILITIES_OVERVIEW.title}
      intro={ABILITIES_OVERVIEW.intro}
      sections={ABILITIES_SECTIONS}
    />
  );
};

import { Overview } from '@components';
import {
  ISLANDS_OVERVIEW,
  ISLANDS_SECTIONS,
} from '../../constants';

export const IslandsOverview = () => {
  return (
    <Overview
      title={ISLANDS_OVERVIEW.title}
      intro={ISLANDS_OVERVIEW.intro}
      sections={ISLANDS_SECTIONS}
    />
  );
};

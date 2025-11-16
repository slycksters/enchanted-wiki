import { Overview } from '@components';
import {
  ISLANDS_OVERVIEW,
  ISLANDS_SECTIONS,
} from '../../constants';

export const IslandsOverview = () => {
  return (
    <Overview
      header={ISLANDS_OVERVIEW}
      sections={ISLANDS_SECTIONS}
    />
  );
};

import { Overview } from '@components';
import {
  WORLD_FEATURES_OVERVIEW,
  WORLD_FEATURES_SECTIONS,
} from '../../constants';

export const WorldFeaturesOverview = () => {
  return (
    <Overview
      header={WORLD_FEATURES_OVERVIEW}
      sections={WORLD_FEATURES_SECTIONS}
    />
  );
};

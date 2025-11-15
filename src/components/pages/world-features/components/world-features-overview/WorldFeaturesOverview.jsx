import { Overview } from '@components';
import {
  WORLD_FEATURES_OVERVIEW,
  WORLD_FEATURES_SECTIONS,
} from '../../constants';

export const WorldFeaturesOverview = () => {
  return (
    <Overview
      title={WORLD_FEATURES_OVERVIEW.title}
      intro={WORLD_FEATURES_OVERVIEW.intro}
      sections={WORLD_FEATURES_SECTIONS}
    />
  );
};

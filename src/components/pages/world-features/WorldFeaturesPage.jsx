import { Info, Layout } from '@components';
import { WORLD_FEATURES } from '@data';
import { CATEGORIES } from './constants';

export const WorldFeaturesPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={WORLD_FEATURES.spawnCrystal}>
      <Info />
    </Layout>
  );
};

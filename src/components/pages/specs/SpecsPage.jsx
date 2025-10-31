

import { SPECS } from '@data';
import { Info, Layout } from '@components';
import { CATEGORIES } from './constants';

export const SpecsPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={SPECS.ichigo}>
      <Info />
    </Layout>
  );
};

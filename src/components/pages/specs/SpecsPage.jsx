

import { SPECS } from '../../../data';
import { Layout } from '../../templates';
import { Info } from './components';
import { CATEGORIES } from './constants';

export const SpecsPage = () => {
  return (
    <Layout categories={CATEGORIES} info={SPECS.ichigo}>
      <Info />
    </Layout>
  );
};

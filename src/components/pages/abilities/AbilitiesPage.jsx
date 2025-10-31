import { Info, Layout } from '@components';
import { MAGICS } from '@data';
import { CATEGORIES } from './constants';

export const AbilitiesPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={MAGICS.wind}>
      <Info />
    </Layout>
  );
};

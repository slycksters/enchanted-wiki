import { Info, Layout } from '@components';
import { ITEMS } from '@data';
import { CATEGORIES } from './constants';

export const ItemsPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={ITEMS.facePlaster}>
      <Info />
    </Layout>
  );
};

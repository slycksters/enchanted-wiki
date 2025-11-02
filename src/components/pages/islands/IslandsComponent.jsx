import { Info, Layout } from '@components';
import { ISLANDS } from '@data';
import { CATEGORIES } from './constants';

export const IslandsPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={ISLANDS.crescentIsle}>
      <Info />
    </Layout>
  );
};

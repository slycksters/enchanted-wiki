import { Info, Layout } from '@components';
import { NPCS } from '@data';
import { CATEGORIES } from './constants';

export const NpcsPage = () => {
  return (
    <Layout categories={CATEGORIES} defaultInfo={NPCS.shamSpec}>
      <Info />
    </Layout>
  );
};

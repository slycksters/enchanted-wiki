import { CATEGORIES } from './constants';
import { RACES } from '../../../data';
import { Layout } from '../../templates';
import { Info } from '../specs/components';

export const AbilitiesPage = () => {

  return (
    <Layout categories={CATEGORIES} info={RACES.human}>
      <Info />
    </Layout>
  );
};

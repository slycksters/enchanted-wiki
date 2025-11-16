import { Overview } from '@components';
import {
  ITEMS_OVERVIEW,
  ITEMS_SECTIONS,
} from '../../constants';

export const ItemsOverview = () => {
  return (
    <Overview
      header={ITEMS_OVERVIEW}
      sections={ITEMS_SECTIONS}
    />
  );
};

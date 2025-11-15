import { Overview } from '@components';
import {
  ITEMS_OVERVIEW,
  ITEMS_SECTIONS,
} from '../../constants';

export const ItemsOverview = () => {
  return (
    <Overview
      title={ITEMS_OVERVIEW.title}
      intro={ITEMS_OVERVIEW.intro}
      sections={ITEMS_SECTIONS}
    />
  );
};

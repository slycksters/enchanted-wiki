import { Overview } from '@components';
import {
  EQUIPS_OVERVIEW,
  EQUIPS_SECTIONS,
} from '../../constants';

export const EquipsOverview = () => {
  return (
    <Overview
      header={EQUIPS_OVERVIEW}
      sections={EQUIPS_SECTIONS}
    />
  );
};

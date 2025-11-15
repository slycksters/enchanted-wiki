import { Overview } from '@components';
import {
  EQUIPS_OVERVIEW,
  EQUIPS_SECTIONS,
} from '../../constants';

export const EquipsOverview = () => {
  return (
    <Overview
      title={EQUIPS_OVERVIEW.title}
      intro={EQUIPS_OVERVIEW.intro}
      sections={EQUIPS_SECTIONS}
    />
  );
};

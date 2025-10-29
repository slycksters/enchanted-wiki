import { ContentComponent } from './components';
import { CATEGORIES } from './constants';
import { LayoutComponent } from '../../components/layout';
import { RACES } from '../../data';

export const AbilitiesPage = () => {

  return (
    <LayoutComponent categories={CATEGORIES} defaultInfo={RACES.human}>
      <ContentComponent />
    </LayoutComponent>
  );
};

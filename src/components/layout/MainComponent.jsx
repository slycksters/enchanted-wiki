import { Outlet, useLocation } from 'react-router-dom';
import { NavigationComponent } from './NavigationComponent';
import { BASE_PATH } from '../../constants';

export const MainComponent = () => {
  const location = useLocation();
  const showNavigation =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;

  return (
    <div>
      {showNavigation && <NavigationComponent />}
      <Outlet />
    </div>
  );
};

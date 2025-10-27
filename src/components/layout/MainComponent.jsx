import { Outlet, useLocation } from 'react-router-dom';
import { NavigationComponent } from './NavigationComponent';
import { BASE_PATH } from '../../constants';

export const MainComponent = () => {
  const location = useLocation();
  const showNavigation =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;
  const showLineGraphBackground =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;

  return (
    <div>
      {showNavigation && <NavigationComponent />}
      <div
        className={showLineGraphBackground ? 'line-graph-background' : ''}
        style={{ height: showNavigation ? 'calc(100vh - 80px)' : '' }}
      >
        <Outlet />
      </div>
    </div>
  );
};

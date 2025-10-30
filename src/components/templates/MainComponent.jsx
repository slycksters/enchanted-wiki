import { Outlet, useLocation } from 'react-router-dom';
import { BASE_PATH } from '../../constants';
import { Navbar } from '../organisms';
import { useWindowWidth } from '../../hooks';

export const MainComponent = () => {
  const location = useLocation();
  const windowWidth = useWindowWidth();

  const showNavigation =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;
  const showLineGraphBackground =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;
  const height =
    windowWidth <= 1024 ? 'calc(100vh - 110px)' : 'calc(100vh - 76px)';

  return (
    <div>
      {showNavigation && <Navbar />}
      <div
        className={showLineGraphBackground ? 'line-graph-background' : ''}
        style={{ height: showNavigation ? height : '' }}
      >
        <Outlet />
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavigationComponent } from './NavigationComponent';
import { BASE_PATH } from '../../constants';

export const MainComponent = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // --- Check the width of browser on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNavigation =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;
  const showLineGraphBackground =
    location.pathname !== BASE_PATH && location.pathname !== `${BASE_PATH}/`;
  const height =
    windowWidth <= 1024 ? 'calc(100vh - 110px)' : 'calc(100vh - 76px)';

  return (
    <div>
      {showNavigation && <NavigationComponent />}
      <div
        className={showLineGraphBackground ? 'line-graph-background' : ''}
        style={{ height: showNavigation ? height : '' }}
      >
        <Outlet />
      </div>
    </div>
  );
};

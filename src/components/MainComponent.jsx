import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Controller, InfoPanel, Navbar, Sidebar } from '@components';
import { BASE_PATH } from '@constants';
import { useWindowWidth } from '@hooks';
import * as PageCategories from './pages/pageCategories'; // We will create this file
import styles from './MainComponent.module.css'; // New CSS file

export const MainComponent = () => {
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const pageContentRef = useRef(null);
  const isMobileOrTablet = windowWidth <= 1024;
  const pagesWithNoSidebar = [`${BASE_PATH}/stat-builder`];

  const [showSidebar, setShowSidebar] = useState(false);

  const isHomePage = location.pathname === BASE_PATH || location.pathname === `${BASE_PATH}/`;
  const showNavigation = !isHomePage;

  const getSidebarProps = () => {
    const pageKey = location.pathname.split('/')[2];
    switch (pageKey) {
      case 'abilities':
        return {
          list: PageCategories.ABILITIES_CATEGORIES,
          basePath: `${BASE_PATH}/abilities`,
        };
      case 'equips':
        return { list: PageCategories.EQUIPS_CATEGORIES, basePath: `${BASE_PATH}/equips` };
      case 'items':
        return { list: PageCategories.ITEMS_CATEGORIES, basePath: `${BASE_PATH}/items` };
      case 'islands':
        return {
          list: PageCategories.ISLANDS_CATEGORIES,
          basePath: `${BASE_PATH}/islands`,
        };
      case 'npcs':
        return { list: PageCategories.NPCS_CATEGORIES, basePath: `${BASE_PATH}/npcs` };
      case 'world-features':
        return {
          list: PageCategories.WORLD_FEATURES_CATEGORIES,
          basePath: `${BASE_PATH}/world-features`,
        };
      default:
        return { list: [], basePath: '' };
    }
  };

  const sidebarProps = getSidebarProps();
  const height = isMobileOrTablet
    ? 'calc(100vh - 110px)'
    : 'calc(100vh - 76px)';

  useEffect(() => {
    pageContentRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      {showNavigation && <Navbar />}
      <div
        className={!isHomePage ? 'line-graph-background' : ''}
        style={{ height: showNavigation ? height : '' }}
      >
        {isHomePage ? (
          <Outlet />
        ) : (
          <div className={styles.pageLayoutWrapper}>
            {!pagesWithNoSidebar.includes(location.pathname) && (
              <>
                <Controller onClickHamburger={() => setShowSidebar(true)} />
                <Sidebar
                  list={sidebarProps.list}
                  basePath={sidebarProps.basePath}
                  setShowSidebar={setShowSidebar}
                  showSidebar={showSidebar}
                />
              </>
            )}
            <main className={styles.pageContent} ref={pageContentRef}>
              <Outlet />
            </main>
            {/* <InfoPanel /> */}
          </div>
        )}
      </div>
    </div>
  );
};

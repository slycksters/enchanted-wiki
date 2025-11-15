import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  AbilitiesPage,
  EquipsPage,
  HomePage,
  IslandsPage,
  ItemsPage,
  MainComponent,
  NotFoundPage,
  NpcsPage,
  WorldFeaturesPage,
} from '@components';
import { BASE_PATH } from '@constants';

const defaultRoutes = {
  abilities: '/abilities',
  equips: '/equips',
  items: '/items',
  islands: '/islands',
  npcs: '/npcs',
  worldFeatures: '/world-features',
};

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <MainComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'abilities',
        element: <AbilitiesPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.abilities} replace /> },
          { path: ':category/:slug', element: <AbilitiesPage /> },
        ],
      },
      {
        path: 'equips',
        element: <EquipsPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.equips} replace /> },
          { path: ':category/:slug', element: <EquipsPage /> },
        ],
      },
      {
        path: 'items',
        element: <ItemsPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.items} replace /> },
          { path: ':category/:slug', element: <ItemsPage /> },
        ],
      },
      {
        path: 'islands',
        element: <IslandsPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.islands} replace /> },
          { path: ':category/:slug', element: <IslandsPage /> },
        ],
      },
      {
        path: 'npcs',
        element: <NpcsPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.npcs} replace /> },
          { path: ':category/:slug', element: <NpcsPage /> },
        ],
      },
      {
        path: 'world-features',
        element: <WorldFeaturesPage />,
        children: [
          { index: true, element: <Navigate to={defaultRoutes.worldFeatures} replace /> },
          { path: ':slug', element: <WorldFeaturesPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
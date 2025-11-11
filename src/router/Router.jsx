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
import { BASE_PATH, defaultRoutes } from '@constants';

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
        children: [
          { index: true, element: <Navigate to={defaultRoutes.abilities} replace /> },
          { path: ':category/:slug', element: <AbilitiesPage /> },
        ],
      },
      {
        path: 'equips',
        children: [
          { index: true, element: <Navigate to={defaultRoutes.equips} replace /> },
          { path: ':category/:slug', element: <EquipsPage /> },
        ],
      },
      {
        path: 'items',
        children: [
          { index: true, element: <Navigate to={defaultRoutes.items} replace /> },
          { path: ':category/:slug', element: <ItemsPage /> },
        ],
      },
      {
        path: 'islands',
        children: [
          { index: true, element: <Navigate to={defaultRoutes.islands} replace /> },
          { path: ':category/:slug', element: <IslandsPage /> },
        ],
      },
      {
        path: 'npcs',
        children: [
          { index: true, element: <Navigate to={defaultRoutes.npcs} replace /> },
          { path: ':category/:slug', element: <NpcsPage /> },
        ],
      },
      {
        path: 'world-features',
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
import { createBrowserRouter } from 'react-router-dom';
import { MainComponent } from '../components';
import { BASE_PATH, PAGE_LINKS } from '../constants';
import {
  HomePage,
  NotFoundPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <MainComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...PAGE_LINKS.map((link) => ({
        path: link.path,
        element: link.element,
      })),
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    basename: BASE_PATH, // Also set basename for correct navigation and links
  },
]);

export default router;

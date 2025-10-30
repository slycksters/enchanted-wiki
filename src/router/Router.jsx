import { createBrowserRouter } from 'react-router-dom';
import { MainComponent } from '../components';
import { BASE_PATH, PAGE_LINKS } from '../constants';
import { HomePage, NotFoundPage } from '../components/pages';

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <MainComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...PAGE_LINKS.map((link) => {
        const Component = link.element;
        return {
          path: link.path,
          element: <Component />,
        };
      }),
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

import { createBrowserRouter } from 'react-router-dom';
import { HomePage, MainComponent, NotFoundPage } from '@components';
import { BASE_PATH, PAGE_LINKS } from '@constants';

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

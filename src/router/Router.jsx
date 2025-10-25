import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import { MainLayoutComponent } from '../components';

const basePath = import.meta.env.BASE_URL; // Vite automatically sets this to your base

const router = createBrowserRouter([
  {
    path: basePath,
    element: <MainLayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    basename: basePath, // Also set basename for correct navigation and links
  }
]);

export default router;

import ReactDOMServer from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-next';
import { routesConfig } from './router/routes.config.jsx'; // Import the clean config

import './assets/stylesheets/theme.css';
import './assets/stylesheets/typography.css';
import './index.css';

export function render(url) {
  const helmetContext = {};

  // This will now work because routesConfig contains no browser-specific code.
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [url],
  });

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}
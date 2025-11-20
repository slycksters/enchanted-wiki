// src/router/Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './routes.config.jsx'; // Import the clean config

// This file now ONLY creates and exports the browser router.
const router = createBrowserRouter(routesConfig);

export default router;
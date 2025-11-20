import { HelmetProvider } from 'react-helmet-next';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router.jsx'

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
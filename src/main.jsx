import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Home } from './routes/home/index.jsx';
import { StoreProvider } from './hooks/useStore.jsx';
import { AlbumPage } from './routes/album/index.jsx';
import FourOFour from './routes/404/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/album/:id',
        element: <AlbumPage />,
      },

      {
        path: '*',
        element: <FourOFour />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
);

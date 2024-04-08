import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './pages/Home.tsx';
import Terms from './pages/Terms.tsx';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

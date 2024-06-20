import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

const basename = process.env.PUBLIC_URL || '/Portfolio/'; // Default to '/Portfolio/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <RouterProvider router={routes} />
    </BrowserRouter>
  </React.StrictMode>
);

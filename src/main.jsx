import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Add from './componentes/Add'
import Detalle from './componentes/Detalle'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/detalle/:id',
    element: <Detalle/>,
  },
  {
    path: '/add',
    element: <Add/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

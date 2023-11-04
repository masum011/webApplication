import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './View/AfterAuth/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './View/AfterAuth/Dashboard/Dashboard';
import { Provider } from 'react-redux'
import { store } from './store/store';
import HomebyId from './View/AfterAuth/Home/HomebyId';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/usserid",
    element: <HomebyId/>,
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

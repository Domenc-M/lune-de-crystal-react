import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Evenements from './pages/Evenements';
import Contact from './pages/Contact';
import Prestations from './pages/Prestations';

const router = createBrowserRouter([
  {
    path: "",
    element: <Accueil />,
  },
  {
    path: "/produits",
    element: <Produits />,
  },
  {
    path: "/evenements",
    element: <Evenements />,
  },
  {
    path: "/prestations",
    element: <Prestations />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <Accueil />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// main.jsx (or index.jsx)
import './style/reset.css'
import './App.scss';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Evenements from './pages/Evenements';
import Prestations from './pages/Prestations';
import Produits from './pages/Produits';
import ErrorPage from './pages/ErrorPage';
import LegalMentions from './pages/LegalMentions';
import Lithotherapie from './pages/produits/Lithotherapie';
import Aromatherapie from './pages/produits/Aromatherapie';
import Bougies from './pages/produits/Bougies';
import Decorations from './pages/produits/Decorations';
import Encens from './pages/produits/Encens';
import Oracles from './pages/produits/Oracles';
import Pendules from './pages/produits/Pendules';
import Religion from './pages/produits/Religion';
import Sonotherapie from './pages/produits/Sonotherapie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // shared header/footer
    errorElement: <ErrorPage />, // nice to have
    children: [
      { index: true, element: <Accueil /> },
      { path: "produits", element: <Produits /> },
      { path: "evenements", element: <Evenements /> },
      { path: "prestations", element: <Prestations /> },
      { path: "mentions-legales", element: <LegalMentions /> },

      { path: "produits/lithotherapie", element: <Lithotherapie /> },
      { path: "produits/aromatherapie", element: <Aromatherapie /> },
      { path: "produits/bougies", element: <Bougies /> },
      { path: "produits/decorations", element: <Decorations /> },
      { path: "produits/encens", element: <Encens /> },
      { path: "produits/oracles", element: <Oracles /> },
      { path: "produits/pendules", element: <Pendules /> },
      { path: "produits/religion", element: <Religion /> },
      { path: "produits/sonotherapie", element: <Sonotherapie /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import './style/reset.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Layout from './components/Layout';
import Evenements from './pages/Evenements';
import Prestations from './pages/Prestations';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Global layout wraps everything */}
          <Route element={<Layout />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/produits" element={<Produits />} />

          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

import React from 'react';
import {Link} from "react-router-dom";
import banner from '../img/banner.jpg';
import logo from '../img/Logo_texte_blanc.png';

function Navbar() {
  return (
    <div className='navigation-menu'>
    <nav>
        <ul>
            <li>
              <Link to={"/produits"} className="navbar_links">Produits</Link>
              <ul className="dropdown-content">
                <li><Link to="/produits/lithotherapie">Lithothérapie</Link></li>
                <li><Link to="/produits/aromatherapie">Aromathérapie</Link></li>
                <li><Link to="/produits/bougies">Bougies</Link></li>
                <li><Link to="/produits/decorations">Décorations</Link></li>
                <li><Link to="/produits/oracles">Oracles</Link></li>
                <li><Link to="/produits/encens">Encens et fumigations</Link></li>
                <li><Link to="/produits/sonotherapie">Sonothérapie</Link></li>
                <li><Link to="/produits/pendules">Pendules</Link></li>
                <li><Link to="/produits/religion">Religion</Link></li>
              </ul>
            </li>
            <li><Link to={"/prestations"} className="navbar_links">Prestations</Link></li>
            <li><Link to={"/evenements"} className="navbar_links">Evènements</Link></li>
        </ul>
    </nav>
    <section class="banner_container">
        <Link to={"/"}>
        <div class="logo_container"><img src={logo} alt=""/></div>
        <img src={banner} alt="night sky"/>
        <div class="banner_layer"></div>
        </Link>
    </section>
    </div>
  )
}

export default Navbar
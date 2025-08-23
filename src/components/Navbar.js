import React from 'react';
import {Link, useLocation} from "react-router-dom";
import banner from '../img/banner.jpg';
import logo from '../img/Logo_texte_blanc.png';

function Navbar() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className='navigation-menu'>
    <nav>
        <ul>
            <li>
              <Link to={"/produits"} className={"navbar_links" + (location === "/produits" ? " clicked" : "")}>Produits</Link>
              <ul className="dropdown-content">
                <li><Link to="/produits/lithotherapie" className={location === "/produits/lithotherapie" ? "clicked" : ""}>Lithothérapie</Link></li>
                <li><Link to="/produits/aromatherapie" className={location === "/produits/aromatherapie" ? "clicked" : ""}>Aromathérapie</Link></li>
                <li><Link to="/produits/bougies" className={location === "/produits/bougies" ? "clicked" : ""}>Bougies</Link></li>
                <li><Link to="/produits/decorations" className={location === "/produits/decorations" ? "clicked" : ""}>Décorations</Link></li>
                <li><Link to="/produits/oracles" className={location === "/produits/oracles" ? "clicked" : ""}>Oracles</Link></li>
                <li><Link to="/produits/encens" className={location === "/produits/encens" ? "clicked" : ""}>Encens et fumigations</Link></li>
                <li><Link to="/produits/sonotherapie" className={location === "/produits/sonotherapie" ? "clicked" : ""}>Sonothérapie</Link></li>
                <li><Link to="/produits/pendules" className={location === "/produits/pendules" ? "clicked" : ""}>Pendules</Link></li>
                <li><Link to="/produits/religion" className={location === "/produits/religion" ? "clicked" : ""}>Religion</Link></li>
              </ul>
            </li>
            <li><Link to={"/prestations"} className={"navbar_links" + (location === "/prestations" ? " clicked" : "")}>Prestations</Link></li>
            <li><Link to={"/evenements"} className={"navbar_links" + (location === "/evenements" ? " clicked" : "")}>Evènements</Link></li>
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
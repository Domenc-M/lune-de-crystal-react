import React from 'react';
import {Link} from "react-router-dom";
import banner from '../img/banner.jpg';
import logo from '../img/Logo_texte_blanc.png';

function Navbar() {
  return (
    <div className='navigation-menu'>
    <nav>
        <ul>
            <li><Link to={"/produits"}>Produits</Link></li>
            <li><Link to={"/prestations"}>Prestation</Link></li>
            <li></li>
            <li><Link to={"/evenements"}>Evènements</Link></li>
            <li><Link to={"/contact"}>Nous retrouver</Link></li>
        </ul>
    </nav>
    <section class="banner_container">
        <Link to={"/accueil"}>
        <div class="logo_container"><img src={logo} alt=""/></div>
        <img src={banner} alt="night sky"/>
        <div class="banner_layer"></div>
        </Link>
    </section>
    </div>
  )
}

export default Navbar
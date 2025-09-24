import React from 'react';
import {Link} from "react-router-dom";
import banner from '../img/banner.jpg';
import logo from '../img/Logo_texte_blanc.png';

function Footer() {
  return (
    <section className='footer'>
        
        <div className="footer_img_container">
          <img src={banner} alt="night sky"/>
          <div className="footer_layer"></div>
        </div>

        <ul className="footer_navbar">
          <li><Link to={"/"}>Accueil</Link></li>
          <li><Link to={"/produits"}>Produits</Link></li>
          <li><Link to={"/prestations"}>Prestations</Link></li>
          <li><Link to={"/evenements"}>Evenements</Link></li>
        </ul>
        <div className="footer_logo_container">
          <Link to={"/"}>
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <ul className="footer_navbar">
          <li><Link to={"/mentions-legales"}>Mentions légales</Link></li>
        </ul>
        
    </section>
  )
}

export default Footer
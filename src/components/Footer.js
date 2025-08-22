import React from 'react';
import {Link} from "react-router-dom";
import banner from '../img/banner.jpg';
import logo from '../img/Logo_texte_blanc.png';

function Footer() {
  return (
    <section className='footer'>
        <Link to={"/"}></Link>
        <div class="footer_img_container">
          <img src={banner} alt="night sky"/>
          <div class="footer_layer"></div>
        </div>
        <div className="footer_logo_container">
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="footer_navbar">
          <li><Link to={"/"}>Accueil</Link></li>
          <li>Produits</li>
          <li>Prestations</li>
          <li>Evenements</li>
        </ul>
        <ul className="footer_navbar">
          <li>Mentions légales</li>
        </ul>
        
    </section>
  )
}

export default Footer
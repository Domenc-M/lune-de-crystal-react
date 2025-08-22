 import React from 'react'
 import homePhoto from '../img/devanture.png'
 import facebook from '../img/facebook-brands-solid-full.svg'
 import instagram from '../img/instagram-brands-solid-full.svg'
 import {Link} from "react-router-dom";

 function Accueil() {
   return (
     <div>

        <section>
                <h1>
                  Bienvenue à Lune de crystal, notre magasin bien-être et spiritualité.
                </h1>

        </section>

        <section className="photo-section">
        <div className="home-photo-container">
          <img src={homePhoto} alt="Lune de crystal shop"></img>
        </div>

        <div className="divider"></div>

        <p>Lune de Crystal est une entreprise familiale, vous serez reçus par Laurence et Maxime.
Nous mettons tout en oeuvre pour que votre visite soit un moment de détente, de partage et d'accompagnement.
Nous vous proposons une large gamme de <Link to="/produits" >produits</Link> dont beaucoup sont des créations maisons.
        </p>
        </section>

        <section>
          <h2>Retrouvez nous à Orthez, au 3 rue du Général Foy.</h2>
          <div className="map-container">
            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46313.21810729475!2d-0.8159231771689421!3d43.49031544360271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56937c6b53f033%3A0x1849b156a7d40881!2sLune%20de%20Crystal!5e0!3m2!1sen!2sfr!4v1755339262266!5m2!1sen!2sfr"></iframe>
          </div>
        </section>

        <section className="contact-section">
        <h3>Vous pouvez aussi nous contacter...</h3>
        <ul>
          <li>
            <p className="contact-title">Téléphone</p>
            <p className="contact-sub">05 47 73 07 24</p>
          </li>
          <li>
            <p className="contact-title">E-mail</p>
            <p className="contact-sub">lunedecrystal64@gmail.com</p>
          </li>
        </ul>
        <h4>...Ou nous retrouver sur les réseaux sociaux !</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/Lunedecrystal64" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"></img></a>
          </li>
          <li>
            <a href="https://www.instagram.com/lunedecrystal64" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"></img></a>
          </li>
        </ul>
        </section>

     </div>
   )
 }

export default Accueil;
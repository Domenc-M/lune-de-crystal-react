 import React from 'react'
 import holistique from '../img/prestations/holistique.jpg'
 import vibratoire from '../img/prestations/vibratoire.jpg'
 import lumiere from '../img/prestations/lumiere.png'
 
 function Prestations() {
   return (
     <div className="page_prestations">

       <h1>
         Prestations
       </h1>
       <p className="prestation_intro">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       </p>

        <section className="section_prestations">
          <div class="prestation_img_container">
            <img src={holistique} alt=""></img>
          </div>
          <h2>Séance "Harmonisation Holistique"</h2>
          <strong>45€ 1 heure</strong>
          <p>
            Nettoyage profond des différents corps énergétiques, grâce aux cristaux et aux tambours chamanique.
            <br/>Libérations des chocs et blessures du passé, des nfluences négatives et des blocages.
          </p>
        </section>

        <section className="section_prestations">
          <div class="prestation_img_container">
            <img src={vibratoire} alt=""></img>
          </div>
          <h2>Séance vibratoire</h2>
          <strong>25€ 30 minutes</strong>
          <p>
            Bols tibétains, bols enc ristal et carillons koshi.
            <br/>Libère des tensions physiques et mentales.
            <br/>Soulagement émotionnel.
          </p>
        </section>

        <section className="section_prestations">
          <div class="prestation_img_container">
            <img src={lumiere} alt=""></img>
          </div>
          <h2>Séance "Lumière de cristal"</h2>
          <strong>25€ 30 minutes</strong>
          <p>
            Synergie des cristaux, de la lumière, des couleurs.
            <br/>Accueillez une énergie pure et puissante, de nettoyage et de développement personnel et spirituel.
          </p>
        </section>

     </div>
   )
 }

 export default Prestations;
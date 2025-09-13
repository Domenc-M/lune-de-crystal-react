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
         L'activité conseil et vente est complétée par des séances <strong>bien-être</strong> sur rendez vous. Profitez de moments d'harmonisation énergétique dans un cocon de <strong>bien-être</strong> dans l'arrière boutique.
       </p>

        <section className="section_prestations">
          <div class="prestation_img_container">
            <img src={holistique} alt=""></img>
          </div>
          <h2>Séance "Harmonisation Holistique"</h2>
          <span>45€ 1 heure</span>
          <p>
            Nettoyage profond des différents corps énergétiques, grâce aux <strong>cristaux</strong> et aux <strong>tambours chamanique</strong>.
            <br/>Libérations des chocs et blessures du passé, des nfluences négatives et des blocages.
          </p>
        </section>

        <section className="section_prestations">
          <div class="prestation_img_container">
            <img src={vibratoire} alt=""></img>
          </div>
          <h2>Séance vibratoire</h2>
          <span>25€ 30 minutes</span>
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
          <span>25€ 30 minutes</span>
          <p>
            Synergie des <strong>cristaux</strong>, de la lumière, des couleurs.
            <br/>Accueillez une énergie pure et puissante, de nettoyage et de développement personnel et spirituel.
          </p>
        </section>

     </div>
   )
 }

 export default Prestations;
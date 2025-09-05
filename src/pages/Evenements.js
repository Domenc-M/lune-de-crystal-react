 import React from 'react'
 import pendule from '../img/evenements/pendule.webp'

 function Evenements() {
   return (
     <div className="page_evenement">
       <h1>
         Evènements
       </h1>

       <p className="evenement_intro"> 
        Lune de Crystal vous propose des éléments réguliers, comme des ateliers, ou des évènements exceptionnels, comme des collaborations avec d'autre thérapeutes, mais aussi des ateliers sur demande.
       </p>

        <section className="section_evenement">
          <div class="prestation_img_container">
            <img src={pendule} alt=""></img>
          </div>
          <h2>Ateliers Pendule</h2>
          <strong>20€ 1 heure</strong>
          <p>Utiliser le pendule pour améliorer son quotidien</p>
          <p>Rejoignez une de nos séances régulières (4 personnes) : 
            <br/> 13 Septembre à 14h00
            <br/> 11 Octobre à 14h00 
            <br/> 15 Novembre à 14h00</p>
          <p>Si vous avez déjà un groupe de 2 à 4 personnes, <br/>contactez nous pour organiser un atelier à une autre date, rien que pour vous !</p>
        </section>
        
     </div>
     
   )
 }

 export default Evenements;
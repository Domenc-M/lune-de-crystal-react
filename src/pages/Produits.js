 import React from 'react'
 import placeholder from '../img/placeholder-amethyste.webp';
 
 function Produits() {
   return (
     <div>
 <section>
        <div class="product_subsection">
            <ul>
                <li>
                    <strong>Lithothérapie</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Découvrez en boutique un grand choix de pierres parmi plus de 100 références.</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Aromathérapie</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Un grand choix de bracelets dont beaucoup de compositions maison, avec possibilité de créations personnalisées.</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Bougies</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Toutes sorte de pierres taillées, sur chaîne ou cordon, et colliers de perles.</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="product_subsection">
            <ul>
                <li class="product_container">
                    <strong>Décorations</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Oracles</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Encens et fumigations</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="product_subsection">
            <ul>
                <li class="product_container">
                    <strong>Sonothérapie</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Pendules</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
                <li class="product_container">
                    <strong>Religion</strong>
                    <div class="product_img_container">
                        <img src={placeholder} alt=""/>
                        <p>Le blabla des pierres roulées</p>
                        <div class="product_layer"></div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
     </div>
   )
 }

 export default Produits;
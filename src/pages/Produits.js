 import React from 'react'
 import {Link} from "react-router-dom";
 import lithotherapie from '../img/categories/Lithotherapie.jpg';
 import aromatherapie from '../img/categories/Aromatherapie.jpg';
 import bougies from '../img/categories/Bougies.jpg';
 import decorations from '../img/categories/Decorations.jpg'
 import oracles from '../img/categories/Oracles.jpg';
 import fumigation from '../img/categories/Fumigation.jpg';
 import pendules from '../img/categories/pendules.jpg';
 import tibetain from '../img/produits/tibetain.jpg';
 import religion from '../img/categories/religion.jpg';
 
 function Produits() {
   return (
     <div>
 <section>
        <div class="product_subsection">
            <ul>
                <li>
                    <strong>Lithothérapie</strong>
                    <Link to="/produits/lithotherapie">
                        <div class="product_img_container">
                            <img src={lithotherapie} alt=""/>
                            <p>Découvrez en boutique un grand choix de <strong>pierres</strong> parmi plus de 100 références.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>

                </li>
                <li class="product_container">
                    <strong>Aromathérapie</strong>
                    <Link to="/produits/aromatherapie">
                        <div class="product_img_container">
                            <img src={aromatherapie} alt=""/>
                            <p>Utilisez les <strong>huiles essentielles</strong> en application ou en les respirant.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
                <li class="product_container">
                    <strong>Bougies</strong>
                    <Link to="/produits/bougies">
                        <div class="product_img_container">
                            <img src={bougies} alt=""/>
                            <p>Toutes sorte sortes de <strong>bougies</strong> pour vos prières ou <strong>rituels</strong>.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div class="product_subsection">
            <ul>
                <li class="product_container">
                    <strong>Décorations</strong>
                    <Link to="/produits/decorations">
                        <div class="product_img_container">
                            <img src={decorations} alt=""/>
                            <p>Ramenez un peu de la boutique à la maison avec nos <strong>décorations</strong> Lune de Crystal.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
                <li class="product_container">
                    <strong>Oracles</strong>
                    <Link to="/produits/oracles">
                        <div class="product_img_container">
                            <img src={oracles} alt=""/>
                            <p>Que vous aimiez les <strong>tarots</strong> ou les <strong>oracles</strong>, nous avons tout ce qu'il vous faut.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
                <li class="product_container">
                    <strong>Encens et fumigations</strong>
                    <Link to="/produits/encens">
                        <div class="product_img_container">
                            <img src={fumigation} alt=""/>
                            <p>Pour améliorer ou purifier les énergies d'un lieu, consultez nos <strong>encens</strong>, plantes et <strong>résines</strong>.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div class="product_subsection">
            <ul>
                <li class="product_container">
                    <strong>Sonothérapie</strong>
                    <Link to="/produits/sonotherapie">
                        <div class="product_img_container">
                            <img src={tibetain} alt=""/>
                            <p>Avec nos tambours et <strong>bols tibétains</strong>, trouvez la fréquence qui vous ravis.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
                <li class="product_container">
                    <strong>Pendules</strong>
                    <Link to="/produits/pendules">
                        <div class="product_img_container">
                            <img src={pendules} alt=""/>
                            <p>Grand choix de <strong>pendules</strong> et baguettes de sourcier.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
                <li class="product_container">
                    <strong>Religion</strong>
                    <Link to="/produits/religion">
                        <div class="product_img_container">
                            <img src={religion} alt=""/>
                            <p>Nos articles religieux, incluant <strong>bougies</strong>, médailles ou statuettes.</p>
                            <div class="product_layer"></div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
     </div>
   )
 }

 export default Produits;
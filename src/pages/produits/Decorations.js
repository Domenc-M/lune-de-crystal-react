import React from 'react'
import attrappereve from '../../img/produits/carousels/attrappereve.jpg'
import attrappesoleil from '../../img/produits/carousels/attrappesoleil.jpg'
import manekineko from '../../img/produits/carousels/manekineko.jpg'
import arbre from '../../img/produits/carousels/arbre.jpg'
import decorations from '../../img/categories/Decorations.jpg'
import fontainesolo from '../../img/produits/carousels/fontainesolo.jpg'
import fontainemulti from '../../img/produits/carousels/fontainemulti.jpg'
import AliceCarousel from 'react-alice-carousel';

export default function Decorations() {

    const responsive = {
        0: { items: 2 }
    };

    const items = [
    <div className="item" data-value="1">
      <img src={attrappereve} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="2">
      <img src={attrappesoleil} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="3">
      <img src={manekineko} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="4">
      <img src={arbre} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="5">
      <img src={decorations} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="5">
      <img src={fontainemulti} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="5">
      <img src={fontainesolo} alt="pendules" draggable={false}></img>
    </div>,
    ];

   return (
        <div class="product_details">
            <h1>Décorations</h1>
            <p className="product_details_intro">
                Lune de Crystal vous propose de nombreuses <strong>décorations</strong>, la plupart touchant aux thèmes de la <strong>spiritualité</strong> et du <strong>bien-être</strong>, ou de la féerie.
                Parmi elles, des attrappe-soleil, des <strong>carillons</strong>, des clochettes japonaises ou des attrappe-rêves.
            </p>

            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              infinite="true"
              autoPlay="true"
              autoPlayInterval="1500"
            />
        </div>
   )
}
import React from 'react'
import tourniquet from '../../img/produits/carousels/penduletourniquet.jpg'
import pendulecollier from '../../img/produits/carousels/pendulecollier.jpg'
import livret from '../../img/produits/carousels/pendulelivret.jpg'
import baguette from '../../img/produits/carousels/pendulebaguette.jpg'
import pendule from '../../img/categories/pendules.jpg'
import AliceCarousel from 'react-alice-carousel';

export default function Pendules() {

  const responsive = {
    0: { items: 2 }
  };

  const items = [
    <div className="item" data-value="1">
      <img src={tourniquet} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="2">
      <img src={pendulecollier} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="3">
      <img src={livret} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="4">
      <img src={baguette} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="5">
      <img src={pendule} alt="pendules" draggable={false}></img>
    </div>,
  ];

   return (
        <div class="product_details">
            <h1>Pendules</h1>
            <p className="product_details_intro">
                Découvrez notre large sélection de <strong>pendules</strong>, qu'ils soient en bois, en métal, en pierre ou en <strong>résine</strong>. 
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
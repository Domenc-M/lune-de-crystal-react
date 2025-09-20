import React from 'react'
import oracle2 from '../../img/produits/carousels/oracle2.jpg'
import oracle3 from '../../img/produits/carousels/oracle3.jpg'
import oracle from '../../img/categories/Oracles.jpg'
import AliceCarousel from 'react-alice-carousel';

export default function Oracles() {

    const responsive = {
        0: { items: 2 }
    };

    const items = [
    <div className="item" data-value="1">
      <img src={oracle} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="2">
      <img src={oracle2} alt="pendules" draggable={false}></img>
    </div>,
    <div className="item" data-value="3">
      <img src={oracle3} alt="pendules" draggable={false}></img>
    </div>,
    ];

   return (
        <div class="product_details">
            <h1>Oracles</h1>
            <p className="product_details_intro">
                Retrouvez en boutique toute une collection d'<strong>oracles</strong> et de <strong>tarots</strong>, des classiques comme des nouveautés.
                Nos <strong>oracles</strong> sont consultables sur place, pour que vous puissiez trouver ceux qui vous conviennent.
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
import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import tibetain from '../../img/produits/tibetain.jpg'
import cristal from '../../img/produits/cristal.jpg'
import tambour from '../../img/produits/tambour.jpg'

export default function Sonotherapie() {
   return (
        <div class="product_details">
            <h1>Sonothérapie</h1>
            <p className="product_details_intro">
                La <strong>Sonothérapie</strong> consiste à utiliser des instruments comme des bols ou des tambours pour envoyer des vibrations <strong>positives</strong>.
            </p>
            <ProductDetailsSection 
            title="Bols tibétain" 
            paragraph="Venez tester des bols tibétains traditionnels produits à travers un mélange de 7 métaux. Chaque bol à des fonctions et des caractéristiques qui lui sont propre."
            img={tibetain}
            />

            <ProductDetailsSection 
            title="Bols en cristaux" 
            paragraph="Découvrez le son pur d'un bol en cristal, avec ses fréquences différentes et complémentaire du bol tibétain."
            img={cristal}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Autre" 
            paragraph="Nous proposons également des tambours chamanique et des carillons koshi."
            img={tambour}
            />
        </div>
   )
}
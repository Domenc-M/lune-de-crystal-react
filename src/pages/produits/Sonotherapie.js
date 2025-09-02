import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'

export default function Sonotherapie() {
   return (
        <div class="product_details">
            <h1>Sonothérapie</h1>
            <p className="product_details_intro">
                La Sonothérapie consiste à utiliser des instruments comme des bols ou des tambours pour envoyer des vibrations positives.
            </p>
            <ProductDetailsSection 
            title="Bols tibétain" 
            paragraph="Venez tester des bols tibétains traditionnels produits à travers un mélange de 7 métaux. Chaque bol à des fonctions et des caractéristiques qui lui sont propre."
            img={placeholder}
            />

            <ProductDetailsSection 
            title="Bols en cristaux" 
            paragraph="Découvrez le son pur d'un bol en cristal, avec ses fréquences différentes et complémentaire du bol tibétain."
            img={placeholder}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Autre" 
            paragraph="Nous proposons également des tambours chamanique et des carillons koshi."
            img={placeholder}
            />
        </div>
   )
}
import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import encens from '../../img/produits/Encens.jpg';
import sauge from '../../img/produits/Sauge.jpg'
import resine from '../../img/produits/Resines.jpg'

export default function Encens() {
   return (
        <div class="product_details">
            <h1>Encens et fumigations</h1>
            <p className="product_details_intro">
                Encens et fumigations
            </p>
            <ProductDetailsSection 
            title="Encens" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={encens}
            />

            <ProductDetailsSection 
            title="Sauge et Palo Santo" 
            paragraph="Si vous voulez emporter votre solution bien-être avec vous, nous pouvons vous proposer des bracelets de perles, que vous cherchiez une pierre en particulier, un de nos mélange maison ou même un bracelet personnalisé."
            img={sauge}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Résines" 
            paragraph="Découvrez également nos pendentifs en pierres, pour ceux qui cherchent une qualité supérieure, ou simplement une "
            img={resine}
            />
        </div>
   )
}
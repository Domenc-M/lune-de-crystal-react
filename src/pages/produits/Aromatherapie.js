import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import rollon from '../../img/produits/rollon.jpg';
import support from '../../img/produits/support.jpg';

export default function Aromatherapie() {
   return (
        <div class="product_details">
            <h1>Aromathérapie</h1>
            <p className="product_details_intro">
                Avec l'aromathérapie, profitez d'huiles essentielles et de roll-on pour que les parfums vous mettent dans une bonne humeur pour mieux attaquer votre journée.
            </p>
            <ProductDetailsSection 
            title="Flacons et roll-ons" 
            paragraph="Choisissez les parfums qui vous conviennent parmi leurs propriétés : purification, protection, sérénité... Ou prenez simplement celui que vous aimez le plus !"
            img={rollon}
            />

            <ProductDetailsSection 
            title="Support et bijoux" 
            paragraph="Sous forme de collier ou de bracelets, transportez avec vous des feutrines parfumable, pour pouvoir sentir vos huiles essentielles n'importe où et n'importe quand."
            img={support}
            reversed={true}
            />
        </div>
   )
}
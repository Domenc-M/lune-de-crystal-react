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
                Pour améliorer ou purifier les énergies d'un lieu, vous pouvez utiliser des encens traditionnels, des plantes, bois ou des résines à brûler.
            </p>
            <ProductDetailsSection 
            title="Encens" 
            paragraph="Retrouvez un grand choix d'encens traditionnels de qualité, parmi des marques suivies ; Satya, Green Tree, HEM, Herbio, Sagrada Madre..."
            img={encens}
            />

            <ProductDetailsSection 
            title="Sauge et Palo Santo" 
            paragraph="La sauge et le palo santo sont un classique pour la purification. Vous trouverez de la sauge en fagot ou en sachet."
            img={sauge}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Résines et mélanges" 
            paragraph="Les résines à brûler sur charbon sont très puissantes au niveau énergétique. Vous trouverez les classiques (benjoin, myrrhe, oliban...) ainsi que les religieux (pontifical, Marie qui défait les noeuds...) et des mélanges."
            img={resine}
            />
        </div>
   )
}
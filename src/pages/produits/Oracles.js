import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'

export default function Oracles() {
   return (
        <div class="product_details">
            <h1>Oracles</h1>
            <p className="product_details_intro">
                Retrouvez en boutique toute une collection d'oracle et de tarots, et consultez les sur place pour trouver lesquels vous conviennent.
            </p>
            <ProductDetailsSection 
            title="Pierres en forme libre" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            />
        </div>
   )
}
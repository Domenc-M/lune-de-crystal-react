import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'

export default function Decorations() {
   return (
        <div class="product_details">
            <h1>Décorations</h1>
            <p className="product_details_intro">
                Lune de Crystal vous propose de nombreuses décorations, la plupart touchant aux thèmes de la spiritualité et du bien-être, ou de la féerie.
                <br />Parmi elles, des attrappe-soleil, des carillons, des clochettes japonaises ou des attrappe-rêves.
            </p>
            <ProductDetailsSection 
            title="Pierres en forme libre" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            />
        </div>
   )
}
import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'

export default function Pendules() {
   return (
        <div class="product_details">
            <h1>Pendules</h1>
            <p className="product_details_intro">
                Découvrez notre large sélection de pendules, qu'ils soient en bois, en métal, en pierre ou en résine. 
            </p>
            <ProductDetailsSection 
            title="Pierres en forme libre" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            />
        </div>
   )
}
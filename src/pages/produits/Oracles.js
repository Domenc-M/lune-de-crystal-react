import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'

export default function Lithotherapie() {
   return (
        <div class="product_details">
            <h1>Lithothérapie</h1>
            <p className="product_details_intro">
                La Lithothérapie est l'art d'utiliser les pierres pour travailler sur soi même. Elles peuvent vous donner un coups de pouce dans de nombreux domaines : réduire le stress, prendre confiance en soi, trouver les mots juste.
                Mais ultimement, elles ne font que vous reconnecter avec un potentiel qui existe déjà en vous.
            </p>
            <ProductDetailsSection 
            title="Pierres en forme libre" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            />

            <ProductDetailsSection 
            title="Bracelets" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Pendentifs" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={placeholder}
            />
        </div>
   )
}
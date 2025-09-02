import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import pierres from '../../img/produits/pierres.jpg'
import bracelets from '../../img/produits/bracelets.jpg'
import pendentifs from '../../img/produits/pendentifs.jpg'

export default function Lithotherapie() {
   return (
        <div class="product_details">
            <h1>Lithothérapie</h1>
            <p className="product_details_intro">
                La Lithothérapie est le fait d'utiliser les pierres pour travailler sur soi même. Elles peuvent vous donner un coup de pouce dans de nombreux domaines : réduire le stress, avoir confiance en soi, trouver les mots juste.
                <br/>Mais ultimement, elles ne font que vous reconnecter avec un potentiel qui existe déjà en vous.
            </p>
            <ProductDetailsSection 
            title="Pierres en forme libre" 
            paragraph="Profitez d'une très grande sélection de pierres, qu'elles soient brut ou roulée, petites à garder sur soi, ou plus grosse à poser dans la pièce."
            img={pierres}
            />

            <ProductDetailsSection 
            title="Bracelets" 
            paragraph="Si vous voulez emporter votre solution bien-être avec vous, nous pouvons vous proposer des bracelets de perles, que vous cherchiez une pierre en particulier, une de nos combinaisons maison ou même un bracelet personnalisé."
            img={bracelets}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Pendentifs" 
            paragraph="Découvrez également nos pendentifs en pierres, pour ceux qui cherchent une qualité supérieure, ou simplement une autre façon de transporter sa pierre."
            img={pendentifs}
            />
        </div>
   )
}
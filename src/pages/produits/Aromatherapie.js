import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import rollon from '../../img/produits/rollon.jpg';
import support from '../../img/produits/support.jpg';

export default function Aromatherapie() {
   return (
        <div class="product_details">
            <h1>Aromathérapie</h1>
            <p className="product_details_intro">
                Avec l'aromathérapie, profitez d'huiles essentielles en flacons ou en roll-on. Nous vous proposons également des créations maison combinant huiles essentielle et cristaux.
            </p>
            <ProductDetailsSection 
            title="Flacons et roll-ons" 
            paragraph="Choisissez ce qui vous convient parmi nos propositions pour le réconfort, la sérénité, la protection, la chance..."
            img={rollon}
            />

            <ProductDetailsSection 
            title="Support et bijoux" 
            paragraph="Dans un collier ou un bracelet, une feutrine impregnée d'huile essentielle vous permet de profiter toute la journée de ses bienfaits."
            img={support}
            reversed={true}
            />
        </div>
   )
}
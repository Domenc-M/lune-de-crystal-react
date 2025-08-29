import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import breligion from '../../img/produits/breligion.jpg'
import medailles from '../../img/produits/medailles.jpg'
import statuettes from '../../img/produits/statuettes.jpg'

export default function Religion() {
   return (
        <div class="product_details">
            <h1>Religion</h1>
            <p className="product_details_intro">
                Nous possédons des articles religieux, comme des bougies, des médailles ou des statuettes, pour répondre à vos besoins spirituels.
            </p>
            <ProductDetailsSection 
            title="Bougies religieuses" 
            paragraph="Nous possédons des neuvaines à l'image de nombreux saints et anges, pour vos prières."
            img={breligion}
            />

            <ProductDetailsSection 
            title="Médailles" 
            paragraph="Choisissez parmi un vaste sélection des médailles de saints pour répondre à vos besoins."
            img={medailles}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Statuettes" 
            paragraph="Décorez votre maison avec des statuettes issues de diverses religions pour vous apporter la chance et le bonheur."
            img={statuettes}
            />
        </div>
   )
}
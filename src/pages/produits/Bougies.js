import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import placeholder from '../../img/placeholder-amethyste.webp'
import btotem from '../../img/produits/btotem.jpg';
import brituel from '../../img/produits/brituel.jpg';
import breligion from '../../img/produits/breligion.jpg';

export default function Bougies() {
   return (
        <div class="product_details">
            <h1>Bougies</h1>
            <p className="product_details_intro">
                
            </p>
            <ProductDetailsSection 
            title="Bougies totem" 
            paragraph="Nos bougies totem couvrent la plupart des animaux totems, mais au besoin, vous pouvez toujours nous demander une bougie personnalisée."
            img={btotem}
            />

            <ProductDetailsSection 
            title="Bougies rituelles" 
            paragraph="Nous avons des bougies décorées et parfumées que vous pouvez utiliser dans vos rituels, qu'ils concernent l'abondance, l'amour ou le succès."
            img={brituel}
            reversed={true}
            />

            <ProductDetailsSection 
            title="Bougies religieuses" 
            paragraph="Nous possédons également des neuvaines à l'image de nombreux saints et anges, pour vos prières."
            img={breligion}
            />
        </div>
   )
}
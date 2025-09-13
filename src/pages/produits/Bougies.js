import React from 'react'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import btotem from '../../img/produits/btotem.jpg';
import brituel from '../../img/produits/brituel.jpg';
import breligion from '../../img/produits/breligion.jpg';

export default function Bougies() {
   return (
        <div class="product_details">
            <h1>Bougies</h1>
            <p className="product_details_intro">
                Une <strong>bougie</strong> peut servir de canal, un outil utile pour manifester et concrétiser vos désirs et vos prières.
                Nous proposons plusieurs types de <strong>bougies</strong>, du <strong>cierge</strong> classique à la <strong>neuvaine</strong>.
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
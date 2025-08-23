 import React from 'react'
 import homePhoto from '../img/devanture.png'
 import facebook from '../img/facebook-brands-solid-full.svg'
 import instagram from '../img/instagram-brands-solid-full.svg'
 import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ErrorPage() {
   return (
        <div>
            <Navbar />
            Oh non ! Cette page à ascensionné vers une sphère supérieure !
            <Footer />
        </div>
   )
}
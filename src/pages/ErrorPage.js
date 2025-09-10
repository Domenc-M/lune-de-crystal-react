 import React from 'react'
 import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ErrorPage() {
   return (
        <div>
            <Navbar />
            <div className="error_page">
                Oh non ! Cette page est devenue un fantôme !
            </div>

            <div className="error_page_link">
            <Link to="/">
            Cliquez ici pour retourner à l'accueil
            </Link>
            </div>
            
            
            <Footer />
        </div>
   )
}
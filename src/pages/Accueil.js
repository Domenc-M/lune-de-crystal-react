 import React from 'react'
 import Navbar from '../components/Navbar'
 import homePhoto from '../img/devanture.jpg'
 import GoogleMap from '../components/GoogleMap'

 function Accueil() {
   return (
     <div>
         <Navbar />
       <h1>
         Bienvenue à Lune de crystal, notre magasin bien-être et spiritualité.
       </h1>
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       </p>

       <div className="home-photo-container">
        <img src={homePhoto} alt="Lune de crystal shop"></img>
       </div>
       <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46313.21810729475!2d-0.8159231771689421!3d43.49031544360271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56937c6b53f033%3A0x1849b156a7d40881!2sLune%20de%20Crystal!5e0!3m2!1sen!2sfr!4v1755339262266!5m2!1sen!2sfr"></iframe>
       </div>

     </div>
   )
 }

export default Accueil;
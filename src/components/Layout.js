import React from 'react';
import {ScrollRestoration, Outlet} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
        <ScrollRestoration getKey={() => { return Math.random().toString();}}/>
    </div>
  )
}

export default Layout
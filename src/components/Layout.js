import React from 'react';
import {ScrollRestoration, Outlet} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
        <ScrollRestoration getKey={() => { return Math.random().toString();}}/>
        {/* <ScrollRestoration getKey={(location) => location.pathname} /> */}
    </div>
  )
}

export default Layout
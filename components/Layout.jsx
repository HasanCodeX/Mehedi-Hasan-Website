import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';
import AnimatedCursor from './AnimatedCursor';

const Layout = () => {
    return (
        <div>
             
            < Navbar />
            <SocialSidebar />
            <Outlet/>

        </div>
    );
};

export default Layout;
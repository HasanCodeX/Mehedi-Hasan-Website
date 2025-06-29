import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';
import AnimatedCursor from './AnimatedCursor';

const Layout = () => {
    return (
        <div>
             <AnimatedCursor
        color="34, 197, 94" // Tailwind emerald
        innerSize={8}
        outerSize={32}
        outerScale={2.5}
        innerScale={1}
        trailingSpeed={10}
      />
            < Navbar />
            <SocialSidebar />
            <Outlet/>

        </div>
    );
};

export default Layout;
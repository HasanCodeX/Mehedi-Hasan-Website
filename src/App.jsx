import HeroSection from "../components/HeroSection";
// import SocialSidebar from "../components/SocialSidebar";
// import Navbar from "../components/Navbar";
// import AboutMe from "../components/AboutMe";
import "./App.css";
// import ContactMe from '../components/ContactMe';
// import ProjectSection from "../components/ProjectSection";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "../components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [ 
      {
        index: true,
        Component: HeroSection,
      }
    ] ,
  },
]);
 <RouterProvider router={router} />
import HeroSection from "../components/HeroSection";

import "./App.css";


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
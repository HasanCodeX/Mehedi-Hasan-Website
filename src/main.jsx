import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HeroSection from "../components/HeroSection";


import AboutMe from "../components/AboutMe";
import "./App.css";
import ContactMe from '../components/ContactMe';
import ProjectSection from "../components/ProjectSection";
import NotFound from "../components/NotFound";

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
        path: "/",
        Component: HeroSection,
      },

      {
        path: "about",
        Component: AboutMe,
      },
      {
        path: "projects",
        Component: ProjectSection,
      },
      {
        path: "contact",
        Component: ContactMe,
      },
      {
        path: "*",
        Component: NotFound,
      }
    ],
  },
]);

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);






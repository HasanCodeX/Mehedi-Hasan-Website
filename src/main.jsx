import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HeroSection from "../components/HeroSection";


import AboutMe from "../components/AboutMe";
import "./App.css";
import ContactMe from '../components/ContactMe';
import ProjectSection from "../components/ProjectSection";

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
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)






import HeroSection from "../components/HeroSection";
import SocialSidebar from "../components/SocialSidebar";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import "./App.css";
import ContactMe from '../components/ContactMe';
import ProjectSection from "../components/ProjectSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialSidebar />
      <AboutMe />
     < ContactMe />
     <ProjectSection />
    </>
  );
}

export default App;
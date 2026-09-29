import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalFocus from "./components/TechnicalFocus";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import SelectedProjects from "./components/SelectedProjects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <TechnicalFocus/>
      <Skills/>
      <FeaturedProject/>
      <SelectedProjects/>
      <Resume/>
      <Contact/>
      <Footer/>
    
      {/* <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-5xl font-bold">Soundarya Mahadev</h1>
        <p className="text-xl text-gray-600">Embedded & Automotive Software</p>
      </div> */}
    </main>
  );
}
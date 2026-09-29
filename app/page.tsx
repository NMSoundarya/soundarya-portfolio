import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnicalFocus from "./components/TechnicalFocus";
import FeaturedProject from "./components/FeaturedProject";
import SelectedProjects from "./components/SelectedProjects";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechnicalFocus/>
      <FeaturedProject/>
      <SelectedProjects/>
      <Footer/>
    
      {/* <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-5xl font-bold">Soundarya Mahadev</h1>
        <p className="text-xl text-gray-600">Embedded & Automotive Software</p>
      </div> */}
    </main>
  );
}
import Navbar from "./components/Navbar";
import Home_Landingpage from "./components/Home_Landingpage";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import TechnicalFocus from "./components/TechnicalFocus";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import SelectedProjects from "./components/SelectedProjects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Home_Landingpage />
      <TechMarquee />
      <FadeIn><About /></FadeIn>
      <FadeIn><TechnicalFocus /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><FeaturedProject /></FadeIn>
      <FadeIn><SelectedProjects /></FadeIn>
      <FadeIn><Resume /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
      <BackToTop />
    </main>
  );
}
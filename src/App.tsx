import AboutPage from "./Component/About";
import { Experience } from "./Component/Experience";
import Footer from "./Component/Footer";
import HomePage from "./Component/Home";
import Navbar from "./Component/navbar";
import Projects from "./Component/PRoject";
import SkillsCarousel from "./Component/Skills";

function App() {
  return (
    <div className="gradient relative text-black ">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsCarousel />
      <Experience />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;

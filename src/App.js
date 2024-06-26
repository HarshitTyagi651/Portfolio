import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbra';
import About from './Pages/AboutPage/About';
import Projects from './Pages/ProjectsPage/Projects';
import Skills from './Pages/SkillsPage/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

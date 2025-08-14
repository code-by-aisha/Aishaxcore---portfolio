import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Herosection";


// Pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;



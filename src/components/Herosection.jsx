 import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; 
import "../styles/hero.css";
import heroBg from "../assets/hero-bg.jpg";
import { FaArrowDown } from "react-icons/fa"; 

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundAttachment: "fixed",
        backgroundPositionY: offsetY * 0.3 + "px", // Slower movement
      }}
    >
      <div className="overlay"></div>

      <div className="container position-relative animate-fade-up">
        <h1 className="hero-title fw-bold mb-3">
          Hi, I’m <span className="highlight">Aisha Fayaz</span>
        </h1>
        <p className="hero-subtitle mb-4">
          Aspiring Front-End Developer | UI UX Designer
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-70}
          className="btn hero-btn px-4 py-2"
        >
          View My Work
        </Link>

        {/* Moving Arrow */}
        <Link
          to="projects"
          smooth={true}
          duration={800}
          offset={-70}
          className="scroll-arrow"
        >
          <FaArrowDown className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}


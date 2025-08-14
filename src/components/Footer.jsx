import React from "react";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <h1 className="footer-bg-text">Aisha Fayaz</h1>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Aishaxcore. All rights reserved.</p>
          <div className="footer-links">
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-70}
              className="footer-link"
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="footer-link"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={600}
              offset={-70}
              className="footer-link"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="footer-link"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



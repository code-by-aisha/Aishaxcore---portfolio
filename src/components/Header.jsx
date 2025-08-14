import React from "react";
import "./header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="brand-name">
          Aishaxcore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link
              to="about"
              smooth={true}
              duration={600}
              className="nav-link"
              offset={-70}
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="nav-link"
              offset={-70}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={600}
              className="nav-link"
              offset={-70}
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="nav-link"
              offset={-70}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;





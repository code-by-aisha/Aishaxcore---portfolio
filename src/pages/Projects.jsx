 import React from "react";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import "../Styles/projects.css";

const Projects = () => {
  return (
    <Element name="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="fade-up">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="row g-4">
          {/* Postify */}
          <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="project-card p-3 rounded-4 h-100">
              <h4>Postify</h4>
              <p>
                A modern post-sharing platform built with React, Appwrite, and
                rich text editing. Fully responsive and real-time.
              </p>
              <a
                href="https://postify-app-theta.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn mt-2"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Tic Tac Toe */}
          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="project-card p-3 rounded-4 h-100">
              <h4>Tic Tac Toe</h4>
              <p>
                A simple yet fun 2-player Tic Tac Toe game built with React and
                clean, reusable components.
              </p>
              <a
                href="https://github.com/code-by-aisha/Tik-Tak-Toe-GAME-PROJECT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn mt-2"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Fake E-commerce */}
          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="project-card p-3 rounded-4 h-100">
              <h4> E-commerce </h4>
              <p>
                A humorous take on an online shop, with product cards, a cart
                system, and 0% chance of actual delivery.
              </p>
             <a href="#" className="btn btn-secondary disabled">
           <i className="bi bi-lock"></i> Code Private
        </a>

            </div>
          </div>

          {/* Amazon Clone */}
          <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="project-card p-3 rounded-4 h-100">
              <h4>Amazon Clone</h4>
              <p>
                A React-based Amazon UI replica with product listings, a
                shopping cart, and checkout flow.
              </p>
              <a href="#" className="btn btn-secondary disabled">
             <i className="bi bi-lock"></i> Code Private
             </a>

            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;

 import React from "react";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/about.css";

AOS.init({
  duration: 1000,
  once: true,
});

const About = () => {
  return (
    <Element name="about" className="about-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="fade-up">
          About <span className="highlight">Me</span>
        </h2>

        <div className="row align-items-center g-5">
          {/* Text Column */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-text p-4 rounded-4">
              <p>
                Hello, I’m <span className="highlight">Aisha</span>, a dedicated
                student  passionate front-end developer and a creative UI | UX designer in the making. My
                work blends creativity and technology, transforming ideas into
                visually engaging, interactive web experiences. I thrive on
                building user-friendly designs that are not only functional but
                also delightful to explore.
              </p>
              <p>
                When I’m not immersed in code, I’m learning new technologies,
                refining my design skills, and drawing inspiration from
                cutting-edge UI trends. My goal is to craft digital solutions
                that leave a lasting impression while maintaining precision and
                accessibility.
              </p>
              <a
                href="#projects"
                className="btn about-btn mt-3"
                data-aos="zoom-in"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-5 text-center" data-aos="fade-left">
            <div className="about-image rounded-4 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/31/8d/eb/318deb6a38705d47ecd9aab67d1f488b.jpg"
                alt="About Me"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;

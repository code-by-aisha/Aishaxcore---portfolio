 import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/skills.css";

AOS.init({ duration: 700, once: true });

const skills = [
  {
    name: "HTML",
    description: "The foundation of my web creations, built with semantic HTML5 for accessibility & SEO.",
    icon: "🌐",
    color: "#E34F26"
  },
  {
    name: "CSS",
    description: "Styling with precision — from Flexbox to Grid, creating visually stunning layouts.",
    icon: "🎨",
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    description: "Making the web alive with dynamic interactions & functional logic.",
    icon: "⚡",
    color: "#F7DF1E"
  },
  {
    name: "Bootstrap",
    description: "Responsive & modern UI with Bootstrap’s powerful grid and components.",
    icon: "📦",
    color: "#7952B3"
  },
  {
    name: "React",
    description: "Building scalable, reactive UIs with component-driven architecture.",
    icon: "⚛️",
    color: "#61DAFB"
  },
  {
    name: "Figma",
    description: "Designing intuitive, beautiful interfaces before bringing them to code.",
    icon: "🖌️",
    color: "#F24E1E"
  },
  {
    name: "Canva",
    description: "Creating professional graphics, presentations, and branding materials with ease.",
    icon: "🎯",
    color: "#00C4CC"
  },
  {
    name: "Content Writing",
    description: "Crafting compelling narratives that resonate with audiences.",
    icon: "✍️",
    color: "#FF7F50"
  },
  {
    name: "Problem Solving",
    description: "Breaking challenges into solutions with logic, creativity, and efficiency.",
    icon: "🧠",
    color: "#4CAF50"
  }
];

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              className="col-md-4 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="skill-card"
                style={{ borderColor: skill.color }}
              >
                <div className="skill-front">
                  <div
                    className="skill-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h5>{skill.name}</h5>
                </div>
                <div className="skill-back" style={{ backgroundColor: skill.color }}>
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

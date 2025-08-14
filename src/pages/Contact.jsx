
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/contect.css";

AOS.init({ duration: 1000, once: true });

function Contact() {
  return (
    <section
      id="contact"
      className="py-5 contact-section"
      style={{
        background: "linear-gradient(130deg, rgba(12, 51, 70, 0.7), rgba(18, 153, 194, 0.8))",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4 text-light fw-bold">Get In Touch</h2>
        <p className="text-center text-muted mb-5">
          Have a question, idea, or just want to say hi? I’d love to hear from you.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              action="https://formspree.io/f/movdvqgl"
              method="POST"
              className="p-4 shadow-lg rounded contact-form"
              style={{
                background: "rgba(17, 196, 196, 0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(90deg, #00bcd4, #3f51b5)",
                    border: "none",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Send Message 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

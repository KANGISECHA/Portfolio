import React from 'react';
import './HomePage.css'; 
const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            I'm Krop Michael, a passionate web developer, building beautiful and functional websites.
          </p>
          <a href="#projects" className="cta-button">
            Check Out My Work
          </a>
        </div>
      </section>

      <section className="about-me-section" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I'm a web developer with a passion for creating dynamic and responsive websites.
          I specialize in front-end technologies like React, JavaScript, HTML, and CSS, and I love building
          user-friendly experiences.
        </p>
      </section>

      <section className="projects-section" id="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Description of Project 3</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact</h2>
        <p>If you'd like to work together or have any questions, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default HomePage;

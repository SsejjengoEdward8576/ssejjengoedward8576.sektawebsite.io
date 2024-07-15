import React, { useState } from "react";
import '../styles/main.css';
import "./OurWorks.css";
import NavigationMenu from '../assets/NavigationMenu';
import Footer from '../assets/Footer';

const OurWorks = () => {
  const [showDocumentation, setShowDocumentation] = useState(false);

  const toggleDocumentation = () => {
    setShowDocumentation(!showDocumentation);
  };

  return (
    <div className="bg-body">
      <h1 className="animated heading">Our Works</h1>
      <NavigationMenu />

      {/* Project section */}
      <div className="portfolio">
        <h1 style={{ color: "rgb(255, 0, 204)" }}>
          <b>Portfolio</b>
        </h1>
        <div className="project">
          <h2>Background-Generator</h2>
          <p>
            This project generates CSS linear gradient values for creating
            beautiful background gradient colors. It's a useful tool for web
            developers to easily create and apply gradient backgrounds.
          </p>
          <div className="buttons">
            <a className="project-button" href="/Projects/backgroundGenerator/index-bg.html" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a className="code-button" href="https://github.com/SsejjengoEdward8576/background-generator.git" target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
            <button className="documentation-button" onClick={toggleDocumentation}>View Documentation</button>
          </div>
        </div>
      </div>

      {/* Documentation modal */}
      {showDocumentation && (
        <div className="documentation">
          <div className="documentation-content">
            <span className="close" onClick={toggleDocumentation}>&times;</span>
            <h2>Documentation</h2>
            <p>
              This project's documentation includes detailed instructions on how to use the Background-Generator tool effectively.
              It covers topics such as:
              <ul>
                <li>Introduction to Background-Generator</li>
                <li>Usage instructions</li>
                <li>Advanced tips and tricks</li>
              </ul>
            </p>
            <p>
              To use the Background-Generator tool:
              <ol>
                <li>Choose two colors using the color pickers.</li>
                <li>Observe the background gradient change in real-time.</li>
                <li>Copy the CSS code generated for the gradient.</li>
              </ol>
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OurWorks;

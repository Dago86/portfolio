// In About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-section">
      <h1>Hi!</h1>
      <p>
        That guy in the picture is me! Behind me are two splendid examples of
        自動販売機, which is read as <i>'jidōhanbaiki'</i> :)
      </p>
      <p>They are the typical vending machines found everywhere in Japan.</p>
      {/* Contenuto aggiuntivo qui */}
    </div>
  );
}

export default About;

// In WelcomeSection.js
import React from "react";
import "./WelcomeSection.css"; // Assicurati di avere questo file CSS
import centralImage from "./me.png";

function WelcomeSection() {
  return (
    <div className="welcome-section">
      <img
        src={centralImage}
        alt="Descrizione significativa"
        className="central-image"
      />
    </div>
  );
}

export default WelcomeSection;

// In InfoLine.js
import React from "react";
import "./Infoline.scss"; // Assicurati di creare questo file CSS per lo styling

function InfoLine({ subject, description, link, url }) {
  return (
    <div className="info-line">
      <span className="subject">{subject}</span>
      <div className="description">
        {description}
        <a
          className="link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default InfoLine;

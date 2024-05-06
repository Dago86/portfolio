import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const scrollThreshold = 300; // Imposta una soglia di scroll prima che l'header inizi a nascondersi

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Imposta la visibilità in base alla direzione dello scroll e alla soglia di scroll
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < scrollThreshold
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, scrollThreshold]);

  return (
    <header className={`header ${visible ? "" : "header-hidden"}`}>
      <div className="container">
        <h2>Diego De Angelis</h2>
        <nav>
          <a href="#about" className="nav-link">
            Bio
          </a>
          <a href="#contact" className="nav-link">
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

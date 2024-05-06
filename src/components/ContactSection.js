// ContactSection.js
import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:diego141286@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/dago.deangelis/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/Diego.DeAngelis">
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}
export default ContactSection;

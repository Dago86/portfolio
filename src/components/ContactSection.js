import React from 'react';

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-section wrap">
      <div className="section-label"><span>05 / Restiamo in contatto</span></div>
      <div className="contact-layout">
        <div><h2>Le conversazioni migliori<br />iniziano con un <em>ciao.</em></h2><p>Per parlare di un progetto, di una storia o di qualcosa che vale la pena scoprire.</p></div>
        <a className="contact-email" href="mailto:diego141286@gmail.com">diego141286@gmail.com <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Diego De Angelis</p>
        <div className="social-links"><a href="https://www.instagram.com/dago.deangelis/">Instagram <span aria-hidden="true">↗</span></a><a href="https://www.facebook.com/Diego.DeAngelis">Facebook <span aria-hidden="true">↗</span></a></div>
        <a href="#top">Torna su <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

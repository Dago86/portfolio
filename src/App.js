import React from 'react';
import './App.css';
import portrait from './assets/diego-giappone.webp';
import portraitSmall from './assets/diego-giappone-small.webp';
import { BookSection, NewsletterSection, ProjectsSection, GallerySection } from './components/PortfolioSections';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Vai al contenuto</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top">Diego De Angelis<span aria-hidden="true">.</span></a>
        <nav aria-label="Navigazione principale">
          <a href="#libro">Libro</a><a href="#substack">Substack</a><a href="#progetti">Progetti</a><a href="#contact">Contatti <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main" tabIndex="-1">
        <section id="about" className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="red-dot" aria-hidden="true" /> Scrittura, codice e altri immaginari</p>
            <h1 id="hero-title">Diego<br />De Angelis<span className="red">.</span></h1>
            <p className="hero-statement">Scrivo di cultura,<br />sviluppo interfacce,<br /><em>esploro immagini.</em></p>
            <p className="hero-note">Tra cultura pop, mondi digitali e una certa<br className="desktop-break" /> passione per il Giappone.</p>
            <a className="text-link" href="#libro">Entra nel mio mondo <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="portrait">
            <img src={portrait} srcSet={`${portraitSmall} 640w, ${portrait} 1200w`} sizes="(max-width: 700px) 92vw, 46vw" width="1632" height="1186" alt="Diego davanti a due distributori automatici di bevande in Giappone" fetchpriority="high" />
            <figcaption><span className="caption-index">01 / Giappone</span><span>Io e due <i>jidōhanbaiki</i>.<br />I distributori automatici, per gli amici.</span></figcaption>
          </figure>
        </section>
        <BookSection />
        <NewsletterSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <ContactSection />
    </div>
  );
}
export default App;

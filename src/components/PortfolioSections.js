import React from 'react';
import cover from '../assets/nostalgia-e-rivoluzione.webp';
import ruins from '../assets/rovine.webp';
import bologna from '../assets/bologna.webp';
import bar from '../assets/bar.webp';
import knight from '../assets/cavaliere.webp';
import night from '../assets/notte.webp';

const Arrow = () => <span aria-hidden="true">↗</span>;

// A curated selection: edit these entries to change the featured reading.
const articles = [
  {
    title: 'Opinionismi su manga e società giapponese',
    description: 'Sulla nascita del manga e del suo valore politico.',
    category: 'Manga · Società',
    url: 'https://mizunonoumeno.substack.com/p/opinionismi-su-manga-e-societa-giapponese',
  },
  {
    title: 'Odissea Dark Souls',
    description: 'Il cinema di Christopher Nolan è stato influenzato dai videogiochi?',
    category: 'Cinema · Videogiochi',
    url: 'https://mizunonoumeno.substack.com/p/odissea-dark-souls',
  },
];

export function BookSection() {
  return (
    <section id="libro" className="book-section wrap section" aria-labelledby="book-title">
      <div className="section-label"><span>01 / Il libro</span><span>Pubblicato da Moscabianca Edizioni</span></div>
      <div className="book-layout">
        <div className="book-art">
          <img src={cover} width="800" height="1152" loading="lazy" decoding="async" alt="Copertina di Nostalgia e rivoluzione. Il Giappone di 20th Century Boys, di Diego De Angelis" />
        </div>
        <div className="book-copy">
          <p className="eyebrow red">Un viaggio nell’immaginario di Naoki Urasawa</p>
          <h2 id="book-title">Nostalgia<br />e <em>rivoluzione.</em></h2>
          <p className="book-subtitle">Il Giappone di <i>20th Century Boys</i></p>
          <p className="body-copy">Cosa raccontano i manga del mondo in cui nascono? Nel mio saggio parto da <i>20th Century Boys</i> per esplorare l’opera di Naoki Urasawa, tra storia del Giappone, cultura pop e trasformazioni sociali.</p>
          <p className="body-copy">Un percorso tra memoria, crescita e rivoluzione, sulle tracce delle storie con cui proviamo a capire noi stessi.</p>
          <p className="book-details">Saggio <span aria-hidden="true">/</span> 144 pagine <span aria-hidden="true">/</span> Moscabianca Edizioni</p>
          <a className="button-link" href="https://moscabiancaedizioni.it/prodotto/nostalgia-e-rivoluzione/">Scopri il libro <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section id="substack" className="newsletter" aria-labelledby="newsletter-title">
      <div className="wrap">
        <div className="section-label"><span>02 / Su Substack</span><span>Appunti, scoperte, ossessioni</span></div>
        <div className="newsletter-intro">
          <h2 id="newsletter-title">La bottega di<br /><em>Tanuki Noumeno.</em></h2>
          <div>
            <p>Cinema, manga, videogiochi e altre cose che mi restano in testa. Uno spazio per seguire le connessioni tra le storie e condividere cose da leggere, guardare, ascoltare.</p>
            <a className="button-link light-button" href="https://mizunonoumeno.substack.com/">Leggi e iscriviti su Substack <Arrow /></a>
          </div>
        </div>
        <p className="eyebrow reading-label">Due letture da cui cominciare</p>
        <div className="reading-grid">
          {articles.map((article, index) => (
            <a className="article-link" href={article.url} key={article.url}>
              <span className="article-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <p className="article-description">{article.description}</p>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="progetti" className="projects-section wrap section" aria-labelledby="projects-title">
      <div className="section-label"><span>03 / Altri percorsi</span></div>
      <div className="section-heading"><h2 id="projects-title">Le altre cose<br />che <em>faccio.</em></h2><p>Parole, esperimenti visivi e interfacce.<br />Tre modi diversi di seguire la curiosità.</p></div>
      <div className="projects-grid">
        <article className="project">
          <p className="eyebrow red">Parole</p><h3>Scrittura</h3>
          <p>Scrivo da anni per riviste culturali: musica, letteratura, media. Su L’Indiscreto mi occupo soprattutto di videogiochi e Giappone.</p>
          <a className="text-link" href="https://linktr.ee/diegodeangelis">I miei articoli <Arrow /></a>
        </article>
        <article className="project">
          <p className="eyebrow red">Esperimenti</p><h3>AI Art</h3>
          <p>Esploro le immagini con DALL·E e Midjourney. Uno dei miei progetti è dedicato a Bologna, vista attraverso l’intelligenza artificiale.</p>
          <a className="text-link" href="https://www.instagram.com/chatgpt.disegna_bologna/">Bologna, reimmaginata <Arrow /></a>
        </article>
        <article className="project">
          <p className="eyebrow red">Interfacce</p><h3>Codice</h3>
          <p>Sviluppo frontend in React per Develer. Anche questo piccolo angolo di internet è fatto con React, e con un po’ di curiosità.</p>
          <a className="text-link" href="https://www.develer.com/">Il mio lavoro in Develer <Arrow /></a>
        </article>
      </div>
    </section>
  );
}

const gallery = [
  { src: ruins, title: 'Tra le rovine', alt: 'Un viandante a cavallo tra rovine fantastiche, sotto una luna verde' },
  { src: bologna, title: 'Bologna, altrove', alt: 'Un polpo gigantesco tra palazzi e bancarelle, in una scena in bianco e nero' },
  { src: bar, title: 'Incontri al bar', alt: 'Una donna e un barista mostruoso in un locale illustrato, illuminato da un’insegna al neon' },
  { src: knight, title: 'Una sosta nel buio', alt: 'Un cavaliere in armatura regge un calice in una grotta attraversata da una cascata' },
  { src: night, title: 'Neon e altre storie', alt: 'Una figura in kimono con un’arma fantastica in una strada notturna illuminata da neon' },
];

export function GallerySection() {
  return (
    <section className="gallery-section wrap section" aria-labelledby="gallery-title">
      <div className="section-label"><span>04 / Immaginario visivo</span><span>Esperimenti con Midjourney v6</span></div>
      <div className="section-heading"><h2 id="gallery-title">Cartoline da<br /><em>mondi possibili.</em></h2><p>Una selezione di immagini generate con l’AI.<br />Tra fantastico, quotidiano e perturbante.</p></div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <figure key={item.src} className={index < 2 ? 'gallery-item gallery-large' : 'gallery-item'}>
            <img src={item.src} width="1024" height="1024" loading="lazy" decoding="async" alt={item.alt} />
            <figcaption><span>{item.title}</span><span>0{index + 1}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

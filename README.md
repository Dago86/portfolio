# Portfolio di Diego De Angelis

Portfolio personale in italiano, basato sul progetto React originale (Create React App).
Il portfolio è configurato per GitHub Pages all’indirizzo `https://dago86.github.io/portfolio/` e non introduce servizi esterni o nuove dipendenze.

## Anteprima locale

```sh
npm ci --legacy-peer-deps
npm start
```

Aprire l’indirizzo indicato dal server, normalmente `http://localhost:3000/portfolio`.
Il parametro `--legacy-peer-deps` permette di installare il lockfile esistente: React Scripts 5 dichiara un peer TypeScript fino alla versione 4, mentre il progetto include TypeScript 5. Non è stata modificata la toolchain per questo restyling.

## Verifiche

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

La build statica viene creata in `build/`. La pubblicazione resta un passaggio separato: `npm run deploy` pubblica su GitHub Pages e non è necessario per l’anteprima.

## Contenuti

- `src/App.js`: navigazione e presentazione.
- `src/components/PortfolioSections.js`: libro, selezione manuale degli articoli Substack, progetti e galleria.
- `src/components/ContactSection.js`: email e social.
- `src/index.css` e `src/App.css`: palette, tipografia e impaginazione responsive.

Le fotografie e le illustrazioni originali sono conservate nel repository. Le copie WebP ottimizzate sono in `src/assets/`; la foto di apertura include due dimensioni responsive. Le immagini successive usano caricamento differito e dimensioni dichiarate.

La copertina proviene dalla [pagina ufficiale di Moscabianca Edizioni](https://moscabiancaedizioni.it/prodotto/nostalgia-e-rivoluzione/) e viene mostrata senza ritagli. Le didascalie della galleria sono descrizioni editoriali delle immagini esistenti.

Nessun feed automatico, modulo di iscrizione o pagamento: libro e newsletter rimandano ai siti originali. Nessuna modifica è stata pubblicata online.

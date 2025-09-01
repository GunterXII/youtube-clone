# YouTube Clone

Un clone semplice di YouTube sviluppato con **React**. Questo progetto permette di visualizzare video popolari per categoria, vedere i dettagli di un video, e visualizzare video consigliati.

---

## Caratteristiche

- Feed dei video più popolari per categoria
- Visualizzazione dettagliata del video
- Canale e informazioni del publisher
- Visualizzazione dei commenti
- Video consigliati a destra
- Sidebar con categorie e canali sottoscritti
- Interfaccia responsive

---

## Tecnologie

- React
- React Router
- CSS moderno (Flexbox & Grid)
- Moment.js (per formattare le date)
- React-icons
- YouTube Data API v3

---

## Setup

1. Clona il repository:
npm install
Crea un file dati.js nella root con la tua API Key di YouTube:
// dati.js
export const API_KEY = "LA_TUA_API_KEY";

##struttura del progetto
/src
  /assets      → immagini e video di esempio
  /components  → tutti i componenti React (Feed, Navbar, Sidebar, PlayVideo, Recommended)
  /pages       → pagine principali (Home, Video)
  dati.js      → file per la API Key (non condividere)
  data.js      → funzioni di utilità (valueConverter)


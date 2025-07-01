
🎬 Movie Finder App

Aplicație web creată cu React și Vite, care permite utilizatorilor să caute filme, să vizualizeze detalii și să adauge filme la favorite. Proiectul consumă API-ul public de la The Movie Database (TMDB).

🚀 Funcționalități

- Afișarea filmelor populare
- Căutare filme după titlu
- Vizualizare detalii film (data lansării, distribuție, descriere)
- Adăugare și gestionare filme favorite (stocate local)
- Navigare între pagini cu React Router

🛠️ Tehnologii folosite

- React
- Vite
- React Router
- TMDB API
- JavaScript (ES6+)
- localStorage pentru salvarea favoritelor

📦 Instalare

1. Clonare repository

    git clone https://github.com/username/movie-finder-app.git
    cd movie-finder-app

2. Instalare dependințe

    npm install

3. Adaugă cheia API TMDB

    Creează un fișier `.env` în rădăcina proiectului și adaugă cheia ta de la TMDB:

    VITE_TMDB_API_KEY=cheia_ta_tmdb

4. Rulare aplicație în modul de dezvoltare

    npm run dev

    Aplicația va porni de obicei la: http://localhost:5173

🧪 Testare

Aplicația a fost testată folosind:

- Postman – pentru verificarea răspunsurilor API-ului TMDB
- Testare manuală – toate funcționalitățile au fost testate în browser (favoriting, navigare, căutare etc.)

📁 Structură proiect (exemplu)

movie-finder-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── README.md
├── vite.config.js
└── package.json

📌 Notițe

- Pentru a rula aplicația, ai nevoie de o cheie validă TMDB.
- Favoritele sunt salvate local, în localStorage, deci nu persistă între browsere/dispozitive.
- Proiectul poate fi extins cu autentificare, backend propriu sau paginare la rezultate.

📄 Licență

Acest proiect este realizat în scop educațional.
Poți folosi codul ca bază pentru propriile tale proiecte.

🙌 Autor

Realizat în cadrul unui stagiu de practică individuală.
Dezvoltat de: [Numele tău] – 2025

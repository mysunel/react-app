
# Movie Finder App

Aplicație web creată cu React și Vite, care permite utilizatorilor să caute filme, să vizualizeze detalii și să adauge filme la favorite. Proiectul consumă API-ul public de la The Movie Database (TMDB).

##  Funcționalități

- Afișarea filmelor populare
- Căutare filme după titlu
- Vizualizare detalii film (data lansării, distribuție, descriere)
- Adăugare și gestionare filme favorite (stocate local)
- Navigare între pagini cu React Router

##  Tehnologii folosite

- React
- Vite
- React Router
- TMDB API
- JavaScript (ES6+)
- localStorage pentru salvarea favoritelor

##  Instalare

1. Clonare repository

    git clone https://github.com/mysunel/react-app.git
    cd react-app

2. Instalare dependențe

    npm install

3. Adaugă cheia API TMDB

    Modifica `./services/api.js` și adaugă cheia ta de la TMDB:

    API_KEY=cheia_ta_tmdb

4. Rulare aplicație în modul de dezvoltare

    npm run dev


## Testare

Aplicația a fost testată folosind:

- Postman – pentru verificarea răspunsurilor API-ului TMDB
- Testare manuală – toate funcționalitățile au fost testate în browser (favoriting, navigare, căutare etc.)

## Notițe

- Pentru a rula aplicația, ai nevoie de o cheie validă TMDB.
- Favoritele sunt salvate local, în localStorage, deci nu persistă între browsere/dispozitive.
- Proiectul poate fi extins cu autentificare, backend propriu sau paginare la rezultate.


## Autor

Realizat în cadrul unui stagiu de practică individuală.
Dezvoltat de: Teliman Mihai – 2025

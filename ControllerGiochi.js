// Array di giochi con informazioni relative (aggiornato)
let games = [
    { title: "NBA 2k24", year: 2023, metacritic: 83, description: "Vivi un'esperienza di gioco intensa, con nuovi controlli e grafica avanzata. Il gameplay riflette l'evoluzione del basket moderno.", image: "Immagini/NBA2k24.jpg", link: "NBA2k24.html" },
    { title: "NBA Live 2010", year: 2009, metacritic: 78, description: "NBA Live 2010 segnò il ritorno in grande stile della saga e portò innovazioni incredibili per l'epoca con una migliore intelligenza artificiale e modalità di gioco rinnovate.", image: "Immagini/NBAlive2010.jpg", link: "NBAlive2010.html" },
    { title: "NBA 2k22", year: 2021, metacritic: 80, description: "NBA 2k22 è stato lodato per la sua grafica incredibile e per le modalità di gioco variate. Ottimo sia per i fan del basket che per i neofiti.", image: "file:///D:/Sito%20web/Immagini/NBA2k22.jpg", link: "game3.html" },
    { title: "NBA 2k23", year: 2022, metacritic: 78, description: "NBA 2k23 ti farà immergere in un esperienza di gioco con una modalità carriera ancora più immersiva. Tuttavia, la critica ha reputato alcune meccaniche di gioco non sono perfette.", image: "Immagini/NBA2k23.jpg", link: "game4.html" },
    { title: "NBA Live 2005", year: 2004, metacritic: 83, description: "NBA Live 2005 è un classico, con un gameplay solido e nuove funzionalità che lo rendono uno dei giochi più apprezzati della serie.", image: "Immagini/NBAlive2005.jpg", link: "game5.html" },
    { title: "NBA 2k20", year: 2019, metacritic: 81, description: "NBA 2k20 è stato un grande successo per la serie, con ottimi miglioramenti nel gameplay e nell'interfaccia utente. Il gioco risulta fluido e coinvolgente.", image: "Immagini/NBA2k20.jpg", link: "game5.html" },
    { title: "NBA Live 2019", year: 2018, metacritic: 63, description: "NBA Live 2019 ha cercato di tornare in grande stile, ma purtroppo la mancanza di innovazioni significative ha lasciato il gioco un po' indietro rispetto alla concorrenza.", image: "Immagini/NBAlive2019.jpg", link: "game5.html" },
    { title: "Pro Basketball Manager 2k24", year: 2024, metacritic: 75, description: "Vivi la vera esperienza di un General Manager e guida la tua franchigia verso la gloria. Sebbene non sia molto famoso, è una gemma per gli appassionati del genere.", image: "Immagini/Pro-Manager2k24.jpg", link: "game5.html" },
    { title: "NBA 2k21", year: 2020, metacritic: 74, description: "NBA 2k21 ha ricevuto critiche miste, col pubblico che è stato mediamente soddisfatto del lavoro di 2k games mentre gli addetti ai lavori sono stati molto pungenti, con leggeri miglioramenti nella grafica e nel gameplay. Il titolo è stato criticato per l'eccessiva somiglianza ai suoi predecessori anche se di fatto non si può dire che non sia divertente da giocare, soprattutto in compagnia.", image: "Immagini/NBA2k21.jpg", link: "game5.html" },
    { title: "NBA ShootOut 2001", year: 2000, metacritic: 74, description: "NBA ShootOut 2001 è un gioco di basket arcade con meccaniche rapide e frenetiche. Se vuoi rivivere un esperienza di gameplay in stile anni '90 questo gioco fa per te.", image: "Immagini/NBAShootOut2001.jpg", link: "game5.html" },
    // Aggiungi altri giochi...
];

// Funzione per ordinare i giochi in base al metacritic o anno
function sortGames() {
    const sortMetacritic = document.getElementById('sort-metacritic').value;
    const sortYear = document.getElementById('sort-year').value;

    let sortedGames = [...games];

    // Ordinamento per Metacritic
    if (sortMetacritic === 'asc') {
        sortedGames.sort((a, b) => a.metacritic - b.metacritic);
    } else if (sortMetacritic === 'desc') {
        sortedGames.sort((a, b) => b.metacritic - a.metacritic);
    }

    // Ordinamento per Anno
    if (sortYear === 'asc') {
        sortedGames.sort((a, b) => a.year - b.year);
    } else if (sortYear === 'desc') {
        sortedGames.sort((a, b) => b.year - a.year);
    }

    // Se non è selezionato alcun filtro, mostra i giochi nell'ordine originale
    if (!sortMetacritic && !sortYear) {
        sortedGames = [...games];
    }

    // Dopo aver ordinato, rendi di nuovo il markup dei giochi
    renderGames(sortedGames);
}

// Aggiungi degli ascoltatori di eventi per i menu di ordinamento
document.getElementById('sort-metacritic').addEventListener('change', sortGames);
document.getElementById('sort-year').addEventListener('change', sortGames);

// Funzione di rendering per i giochi (modificata per accettare l'array di giochi ordinati)
function renderGames(gamesToRender) {
    const gameListContainer = document.getElementById('game-list');
    gameListContainer.innerHTML = ''; // Pulisce i giochi esistenti

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('col-md-5', 'mb-3'); // Aggiungi 'mb-3' per un piccolo margine inferiore

        gameCard.innerHTML = `
            <div class="card card-game">
                <img src="${game.image}" class="card-img-top" alt="${game.title}">
                <div class="card-body">
                    <h5 class="card-title">${game.title}</h5>
                    <p class="card-text">${game.description}</p>
                </div>
                <div class="card-footer">
                    <a href="${game.link}" class="btn btn-primary">Scopri di più</a>
                </div>
            </div>
        `;
        gameListContainer.appendChild(gameCard);
    });
}

// Inizializza la pagina
document.addEventListener("DOMContentLoaded", function() {
    renderGames(games); // Chiamata per generare i giochi dinamicamente
});

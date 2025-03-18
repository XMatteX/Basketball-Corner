// Funzione per gestire il login
function login(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form

    // Recuperiamo il nome utente e lo memorizziamo insieme allo stato del login
    const username = document.getElementById("username").value;
    localStorage.setItem("isLoggedIn", "true"); // Memorizziamo lo stato del login
    localStorage.setItem("username", username); // Memorizziamo il nome utente

    // Modifica la visualizzazione dei bottoni
    document.getElementById("loginBtn").style.display = "none"; // Nascondiamo il tasto login
    document.getElementById("userBtn").style.display = "inline-block"; // Mostriamo il tasto user

    // Aggiorniamo il nome utente nel pulsante User
    document.getElementById("usernameDisplay").innerText = username;

    // Chiudiamo il modal di login (usando Bootstrap Modal)
    $('#loginModal').modal('hide');
}

// Funzione per controllare lo stato del login al caricamento della pagina
function checkLoginStatus() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        document.getElementById("loginBtn").style.display = "none"; // Nascondiamo il tasto login
        document.getElementById("userBtn").style.display = "inline-block"; // Mostriamo il tasto user

        // Mostriamo il nome dell'utente accanto al pulsante User
        const username = localStorage.getItem("username");
        document.getElementById("usernameDisplay").innerText = username;
    } else {
        document.getElementById("loginBtn").style.display = "inline-block"; // Mostriamo il tasto login
        document.getElementById("userBtn").style.display = "none"; // Nascondiamo il tasto user
    }
}

// Funzione per aprire il modal di conferma Logout
function openLogoutModal() {
    const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
    logoutModal.show(); // Mostra il modal di logout
}

// Funzione per fare il logout
function logout() {
    localStorage.removeItem("isLoggedIn"); // Rimuoviamo lo stato del login
    localStorage.removeItem("username"); // Rimuoviamo il nome dell'utente

    // Modifica la visualizzazione dei bottoni
    document.getElementById("loginBtn").style.display = "inline-block"; // Mostriamo il tasto login
    document.getElementById("userBtn").style.display = "none"; // Nascondiamo il tasto user

    // Chiudiamo il modal di logout (usando Bootstrap Modal)
    const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
    logoutModal.hide(); // Chiudiamo il modal di logout
}

// Aggiungi l'evento al form di login
document.getElementById('loginForm').addEventListener('submit', login);


let firstCommentAdded = false; // Variabile per tracciare se il primo commento è stato aggiunto

function submitComment() {
    // Ottieni i valori degli input
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('commentText').value;

    // Verifica che i campi non siano vuoti
    if (!username || !commentText) {
        alert('Per favore, inserisci sia il tuo nome che il commento.');
        return;
    }

    // Crea un nuovo commento
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-box');

    // Crea il nome utente in grassetto arancione
    const commentUsername = document.createElement('div');
    commentUsername.classList.add('username');
    commentUsername.textContent = username;

    // Crea il testo del commento
    const commentParagraph = document.createElement('p');
    commentParagraph.classList.add('comment-text');
    commentParagraph.textContent = commentText;

    const likeDislikeDiv = document.createElement('div');
    likeDislikeDiv.classList.add('like-dislike-buttons');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like');
    likeButton.innerHTML = '👍';
    likeButton.onclick = () => alert('Hai messo un like!');

    const dislikeButton = document.createElement('button');
    dislikeButton.classList.add('dislike');
    dislikeButton.innerHTML = '👎';
    dislikeButton.onclick = () => alert('Hai messo un dislike!');

    // Aggiungi i bottoni per like e dislike
    likeDislikeDiv.appendChild(likeButton);
    likeDislikeDiv.appendChild(dislikeButton);

    // Aggiungi gli elementi al commento
    commentDiv.appendChild(commentUsername);
    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(likeDislikeDiv);

    // Aggiungi il nuovo commento alla lista
    document.getElementById('commentList').appendChild(commentDiv);

    // Mostra il rettangolo arancione solo quando il primo commento viene inserito
    if (!firstCommentAdded) {
        const orangeRectangle = document.createElement('div');
        orangeRectangle.classList.add('orange-rectangle');
        document.getElementById('commentList').appendChild(orangeRectangle); // Aggiungi il rettangolo arancione dopo il primo commento
        firstCommentAdded = true; // Imposta il flag che il primo commento è stato aggiunto

        // Cambia il display del div comment-list-container da "none" a "block"
        document.querySelector('.comment-list-container').style.display = 'block';
    }

    // Reset dei campi
    document.getElementById('username').value = '';
    document.getElementById('commentText').value = '';
}

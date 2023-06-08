console.log('JS OK');

// all the elements from the DOM
const gridContainer = document.getElementById('my-grid');

const playButton = document.getElementById('play-button');


// Aggiungo una variabile per tenere traccia del punteggio dell'utente
let score = 0;

// Funzione per generare la griglia di gioco
const generateGrid = () => {
  playButton.innerText = 'Rigioca';
  gridContainer.innerHTML = '';

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerText = i;

// Event listener per il click sulla cella
cell.addEventListener('click', () => {
  // Controllo se la cella è già attiva
  if (!cell.classList.contains('active')) {
    // Incremento il punteggio e aggiorna l'interfaccia utente
    score++;
    updateScore();

    // Attivo/disattivo la classe 'active' sulla cella
    cell.classList.toggle('active');
    console.log(`Clicked cell ${i}`);

    // Disabilita ulteriori click sulla cella
    cell.style.pointerEvents = 'none';
  }
});

    gridContainer.appendChild(cell);
 }
};

// Funzione per aggiornare il punteggio nell'interfaccia utente
const updateScore = () => {
  const scoreText = document.getElementById('score-text');
  scoreText.innerText = `Punteggio: ${score}`;
};

// listen to the play button
playButton.addEventListener('click', generateGrid);

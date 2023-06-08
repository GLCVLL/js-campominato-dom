console.log('JS OK');

// all the elements from the DOM
const gridContainer = document.getElementById('my-grid');

const playButton = document.getElementById('play-button');


// !Funzione per generare un array di numeri casuali distinti
const generateRandomNumbers = (count, min, max) => {
  const numbers = [];

  while (numbers.length < count) {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numbers.includes(randomNumber));

    numbers.push(randomNumber);
  }

  return numbers;
};

// !Funzione per aggiornare il punteggio nell'interfaccia utente
const updateScore = () => {
  const scoreText = document.getElementById('score-text');
  scoreText.innerText = `Punteggio: ${score}`;
};


// Aggiungo una variabile per tenere traccia del punteggio dell'utente
let score = 0;


// !Funzione per generare la griglia di gioco
const generateGrid = () => {
  playButton.innerText = 'Rigioca';
  gridContainer.innerHTML = '';

  const bombs = generateRandomNumbers(16, 1, 100); // Genero 16 numeri casuali distinti tra 1 e 100
  console.log(bombs); // Stampo i numeri casuali in console per verifica  

  const maxScore = 100 - bombs.length;

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = i;

  // Event listener per il click sulla cella
  cell.addEventListener('click', () => {
    if (bombs.includes(i)) {
      // La cella è una bomba
      cell.style.backgroundColor = 'red';
      alert('Hai calpestato una bomba. Partita terminata.');
    } else {
      // La cella non è una bomba
      cell.classList.toggle('active');
      console.log(`Clicked cell ${i}`);
      score++;
      updateScore();
      cell.style.pointerEvents = 'none';
    } if(score === maxScore){
      alert('Congratulazioni! Hai vinto la partita.')
    }
  });

    gridContainer.appendChild(cell);
  }
};



// listen to the play button
playButton.addEventListener('click', generateGrid);

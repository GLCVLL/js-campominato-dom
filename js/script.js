console.log('JS OK');

// Function to generate the game grid
const generateGrid = () => {

  playButton.innerText = 'Rigioca';

  gridContainer.innerHTML = '';

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = i;

  // Event listener for cell click
  cell.addEventListener('click', () => {
      cell.classList.toggle('active');
      console.log(`Clicked cell ${i}`);
  });
    
  gridContainer.appendChild(cell);

  }
};

// all the elements from the DOM
const gridContainer = document.getElementById('my-grid');

const playButton = document.getElementById('play-button');


// listen to the play button
playButton.addEventListener('click', generateGrid);

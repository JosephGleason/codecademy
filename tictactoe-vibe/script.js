// Game state
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const grid = document.getElementById('grid');
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

// Initialize game
function initializeGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
    resetBtn.addEventListener('click', resetGame);
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = parseInt(cell.getAttribute('data-index'));

    // Check if cell is already filled or game is over
    if (gameBoard[index] !== '' || gameOver) {
        return;
    }

    // Make the move
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    // Check for win or draw
    if (checkWin()) {
        statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameOver = true;
        return;
    }

    if (checkDraw()) {
        statusDisplay.textContent = "It's a Draw!";
        gameOver = true;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

// Check for winning combination
function checkWin() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

// Check for draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

// Reset game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    statusDisplay.textContent = "Player X's Turn";
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
}

// Start the game
initializeGame();

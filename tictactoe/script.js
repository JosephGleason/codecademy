const cells = document.querySelectorAll("[data-cell]");
const restartBtn = document.getElementById("restart-btn");

let circleTurn;

const xClass = 'x';
const circleClass = 'circle';

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cells.forEach(cell => {
        cell.classList.remove(xClass);
        cell.classList.remove(circleClass);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : xClass;

    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        alert(`${circleTurn ? "O's" : "X's"} Wins!`);
        return;
    }
    if (isDraw()) {
        alert("Draw!");
    }
    circleTurn = !circleTurn;
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function checkWin(currentClass) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6]              // Diagonal
    ];
    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(circleClass);
    });
}

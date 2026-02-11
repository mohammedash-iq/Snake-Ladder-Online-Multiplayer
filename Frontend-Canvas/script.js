const board = document.getElementById('board');
const snakes = {
    16: 6, 47: 26, 49: 11, 56: 53, 62: 19,
    64: 60, 87: 24, 93: 73, 95: 75, 98: 78
};

const ladders = {
    1: 38, 4: 14, 9: 31, 21: 42, 28: 84,
    36: 44, 51: 67, 71: 91, 80: 100, 85: 97
};

for (let i = 100; i > 0; i--) {
    const cell = document.createElement('div');
    cell.textContent = i;
    if (i in ladders) {
        cell.innerHTML = `🪜`;
        cell.classList.add("ladder")
    } else if (i in snakes) {
        cell.innerHTML = `🐍`;
        cell.classList.add("snakes")
    } else if (i === 100) {
        cell.innerHTML = `👑`;
        cell.classList.add("win")
    }
    board.appendChild(cell);
}

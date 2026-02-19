const board = document.getElementById('board');
const currentPlayerName = document.getElementById("current-player-name")
const diceBtn = document.getElementById("dice-btn")
const diceResult = document.getElementById("dice-result")

//code for loading the board
const snakes = {
    16: 6, 47: 26, 49: 11, 56: 53, 62: 19,
    64: 60, 87: 24, 93: 73, 95: 75, 98: 78
};

const ladders = {
    2: 38, 4: 14, 9: 31, 21: 42, 28: 84,
    36: 44, 51: 67, 71: 91, 80: 100, 85: 97
};

for (let i = 0; i < 10; i = i + 2) {
    for (let j = (i + 1) * 10; j > i * 10; j--) {
        const cell = createDiv(j);
        board.appendChild(cell);
    }
    for (let k = ((i + 1) * 10) + 1; k <= (i + 2) * 10; k++) {
        const cell = createDiv(k);
        board.appendChild(cell);
    }
}
function createDiv(value) {
    const div = document.createElement('div');
    if (value in snakes) {
        div.textContent = "🐍";
        div.setAttribute("id", `box${value}`);
    }
    else if (value in ladders) {
        div.textContent = "🪜";
        div.setAttribute("id", `box${value}`);
    }
    else if (value === 100) {
        div.textContent = "👑";
        div.setAttribute("id", `box${value}`);
    }
    else {
        div.textContent = value;
        div.setAttribute("id", `box${value}`);
    }
    return div;
}

//code for managing the players
let currentPlayer = "P1";
let player1Position = 1;
let player2Position = 1;


diceBtn.addEventListener("click", () => {
    if (currentPlayer === "P1") {
        const diceNum = rollDice();
        diceResult.innerText = diceNum;
        changePlayerPostion("P1", player1Position + diceNum)
        currentPlayer = "P2";
        currentPlayerName.textContent = "Player 2";
        player1Position += diceNum;
    }
    else {
        console.log("hi")
        const diceNum = rollDice();
        diceResult.innerText = diceNum;
        changePlayerPostion("P2", player2Position + diceNum)
        currentPlayer = "P1";
        currentPlayerName.innerHTML = "Player 1";
        player2Position += diceNum;
    }
})
function rollDice() {
    const randInt = Math.random() * (7 - 1) + 1;
    return Math.floor(randInt);
}

function changePlayerPostion(player, newposition) {
    if (player === "P1") {
        const prevPos = document.getElementById(`box${player1Position}`)
        prevPos.classList.remove("player-1-postion-indicator");
        const newPos = document.getElementById(`box${newposition}`)
        newPos.classList.add("player-1-position-indicator");
    }
    else {
        const prevPos = document.getElementById(`box${player1Position}`)
        prevPos.classList.remove("player-2-postion-indicator");
        const newPos = document.getElementById(`box${newposition}`)
        newPos.classList.add("player-2-position-indicator");
    }
}
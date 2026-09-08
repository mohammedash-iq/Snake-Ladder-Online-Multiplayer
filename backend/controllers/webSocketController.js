import { handleStartGame } from "../controllers/gameLogicController.js"
import { liveGames } from "../store/gameStore.js";

const waitingList = [];
// handles socket connections for a new player and adds him to the waiting list or gives him a player to play with
function handleWebSocketConnections(socket) {
    if (waitingList.length === 0 || socket in waitingList) {
        waitingList.push(socket);
        socket.send(JSON.stringify({ "type": "WAITING", "payload": { "message": "waiting for other player to join!" } }))
    }
    else {
        const player1 = socket;
        const player2 = waitingList.shift();
        liveGames.push({ "P1": player1, "P2": player2, "P1POS": 1, "P2POS": 1, "TURN": "P1" })
        handleStartGame({ socket1: player1, socket2: player2 })
    }
}

function handleWebSocketDisconnections(socket) {
    if (waitingList.find((ele) => ele == socket)) {
        waitingList.pop(socket);
    }
    else if (socket.gameData.roomId in liveGames) {
        //handles live games
    }
}
export { handleWebSocketConnections, handleWebSocketDisconnections };
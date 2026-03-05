import { WebSocketServer } from "ws";

const Games = {}
const waitingPlayers = [];

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (socket) => {
    if (waitingPlayers.length === 0) {
        waitingPlayers.push(socket);
        socket.send("waiting for player");
    }
    else {
        startGame({ socket1: socket, socket2: waitingPlayers.shift() })
    }
    socket.on("message", (data) => {
        const parsedData = JSON.parse(data);
        if (parsedData.message === "move") {
            diceRoll({ roomId: parsedData.roomId })
        }
    })
})


function startGame({ socket1, socket2 }) {
    Games[id].map(ele => ele.send(JSON.stringify({ "message": "Game Started!", "roomId": roomId })))
}

function diceRoll({ roomId }) {
    //random dice generator


}

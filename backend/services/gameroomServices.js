import { liveGames } from "../store/gameStore.js"

// finds the game room from the livegames list.
function findLiveGames({ socketToBeFound }) {

    for (let i = 0; i < liveGames.length; i++) {
        if (liveGames[i].P1 == socketToBeFound || liveGames[i].P2 == socketToBeFound) {
            return { "found": true, "object": liveGames[i] }
        }
        return { "found": false }
    }
}


export { findLiveGames }
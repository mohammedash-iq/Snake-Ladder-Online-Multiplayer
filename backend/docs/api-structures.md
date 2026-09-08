-api structure for websocket responses from the backend:
    {
        type:'MOVE','GAME-STARTED','WIN','WAITING','ERROR'
        payload:{
            data1: data,
            data2: data
        }
    }

-api structure for websocket request from the client:
    {
        type:'ROLL-DICE','END-GAME',
    }
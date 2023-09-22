require('dotenv').config()
const webSocketPort = process.env.webSocketPort || 8080;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketPort);
console.log('WebSocket server listening on port ' + webSocketPort);

const wsServer = new webSocketServer({
    httpServer: server
});
const clients = {};

const getUqiqueId = () =>{
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + '-' + s4();
}

wsServer.on('request', (request) => {
    var userId = getUqiqueId();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
    const connection = request.accept(null, request.origin);
    clients[userId] = connection;
    console.log('connected: ' + userId + ' in ' + Object.getOwnPropertyNames(clients))
    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            console.log('Received Message: ', message.utf8Data);
            for(key in clients){
                clients[key].sendUTF(message.utf8Data);
                console.log('sent Message to: ', clients[key]);
            }
        }
    }
    )
    connection.on('close', (connection) => {
        console.log((new Date()) + ' Peer ' + userId + ' disconnected.');
        delete clients[userId];
    }
    )

});


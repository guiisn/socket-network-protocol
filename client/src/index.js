const io = require('socket.io-client');
const socket = io('http://localhost:3000');
const askForMessage = require('./askForMessage');

// Lida com as mensagens recebidas do servidor socket
socket.on('mensagem', data => {
    console.log(`💬[SERVER]: ${data}`);
});

askForMessage(socket)

// Lida com a desconexão do servidor socket
socket.on('disconnect', () => {
    console.log('Disconnected from server ❌');
});

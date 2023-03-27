const http = require('http');
const replyMessage = require('./replyMessage');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
    // O servidor recebe uma nova conexão
    console.log('Nova conexão');

    // Lida com as mensagens do cliente
    socket.on('mensagem', data => {
        socket.emit('mensagem', JSON.stringify(replyMessage(data)))
    });

    // Lida com a desconexão do cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado ❌');
    });
});

// Ouvindo em uma porta
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 ✅');
});

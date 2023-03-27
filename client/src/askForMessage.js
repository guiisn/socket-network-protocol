const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForMessage(socket) {
    rl.question('', mensagem => {
        if (mensagem === 'sair') {
            rl.close();
            return;
        }
        socket.emit('mensagem', JSON.stringify(mensagem));
        askForMessage(socket);
    });
}

module.exports = askForMessage
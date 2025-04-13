// sockets/socketHandler.js

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Nuevo cliente conectado: ${socket.id}`);

        // Ejemplo de evento: recibir mensaje del cliente
        socket.on('mensaje', (data) => {
            console.log(`Mensaje recibido: ${data}`);
            // Se puede emitir el mensaje a otros clientes, por ejemplo
            io.emit('mensaje', data);
        });

        socket.on('disconnect', () => {
            console.log(`Cliente desconectado: ${socket.id}`);
        });
    });
};

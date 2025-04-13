// index.js
//
// Este archivo es el punto de entrada del proyecto.
// Se configura Express para manejar la API, se establece la conexión a la base de datos
// y se configura Socket.io para la comunicación en tiempo real.

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./config/db'); // Importamos la configuración de la base de datos

// Inicializamos Express y creamos un servidor HTTP
const app = express();
const server = http.createServer(app);

// Configuramos Socket.io sobre el servidor HTTP
const io = socketIo(server);

// Middleware para procesar JSON y datos de formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos usando Sequelize
// La promesa devuelve el resultado de la autenticación
db.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((err) => console.error('Error conectando a la base de datos:', err));

// Aquí podrías incluir rutas para la API (por ejemplo, /api/users, etc.)
// const userRoutes = require('./routes/userRoutes');
// app.use('/api', userRoutes);

// Importamos y configuramos el manejador de sockets
const socketHandler = require('./sockets/socketHandler');
socketHandler(io);

// Configuración del puerto en que el servidor escuchará
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

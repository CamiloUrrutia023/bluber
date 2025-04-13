// config/db.js
//
// Este archivo se encarga de configurar y establecer la conexión con la base de datos MySQL
// utilizando Sequelize. Se conecta a la base de datos "bluber_db" y define los parámetros básicos.

const { Sequelize } = require('sequelize');

// Crear la instancia de Sequelize con los parámetros de conexión
const sequelize = new Sequelize('bluber_db', 'root', 'tu_contraseña', {
  host: 'localhost',      // Cambia esto si tu host es diferente
  dialect: 'mysql',       // Indicamos que se usará MySQL
  logging: false          // Puedes activar logging para ver las queries en la consola
});

// Exportamos la instancia para ser utilizada en otros archivos (por ejemplo, en los modelos)
module.exports = sequelize;

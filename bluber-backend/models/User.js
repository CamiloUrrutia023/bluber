// models/User.js
//
// Ejemplo de un modelo de usuario utilizando Sequelize.
// Define la estructura de la tabla "users" en la base de datos.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importamos la conexión a la base de datos

const User = sequelize.define('User', {
  // Definimos los campos del modelo
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  // Configuración adicional del modelo
  tableName: 'users',
  timestamps: true,    // Crea automáticamente campos createdAt y updatedAt
  createdAt: 'created_at',
  updatedAt: false     // Deshabilitar updatedAt si no se necesita
});

// Exportamos el modelo para usarlo en otros módulos (por ejemplo, en controladores)
module.exports = User;

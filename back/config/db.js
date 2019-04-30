require('dotenv').config()

var Sequelize = require('sequelize');
const rutaDB = process.env.RUTADB;

console.log(rutaDB, 'Esta es la ruta de la db')
var db = new Sequelize(rutaDB, { // define la conexion de sequelize con la base de datos creada en postgres
  logging: false
});

module.exports = db;

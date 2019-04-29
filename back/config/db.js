require('dotenv').config()

var Sequelize = require('sequelize');
const rutaDB = process.env.RUTADB;

console.log(rutaDB)
var db = new Sequelize(rutaDB, { // define la conexion de sequelize con la base de datos creada en postgres
  logging: false
});

module.exports = db;

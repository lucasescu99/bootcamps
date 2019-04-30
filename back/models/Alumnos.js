const S = require('sequelize');
const db = require ('../config/db')


const Alumnos = db.define('alumnos', {
    nombre: {
        type:S.INTEGER,
        allowNull: false,
    }
})


module.exports = Alumnos
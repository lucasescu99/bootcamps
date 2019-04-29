const S = require('sequelize');
const db = require('../config/db');


const OrdenCompra = db.define('ordencompra', {
  status: {
    type: S.ENUM,
    allowNull: false,
    values: ['CREADO', 'PROCESANDO', 'CANCELADO', 'COMPLETADO'],
    defaultValue: 'CREADO'
  },
  domicilio: {
    type: S.STRING
  },
  cp: {
    type: S.INTEGER
  },
  localidad: {
    type: S.STRING
  },
  email: {
    type: S.STRING
  },
  nombre: {
    type: S.STRING
  },
  idProd: {
    type: S.ARRAY(S.INTEGER)
  }
});

module.exports = OrdenCompra;

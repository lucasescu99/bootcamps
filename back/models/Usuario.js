/* eslint-disable no-unused-vars */
const S = require('sequelize');
const crypto = require('crypto');
const db = require('../config/db');
const OrdenCompra = require('./OrdenCompra');
const Carrito = require('../models/Carrito')

const Usuario = db.define('usuario', {
  nombre: {
    type: S.STRING,
    allowNull: false
  },
  apellido: {
    type: S.STRING,
    allowNull: false
  },
  domicilio: {
    type: S.STRING,
    allowNull: false
  },
  email: {
    type: S.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: S.STRING,
    allowNull: false
  },
  salt: {
    type: S.STRING
  },
  isAdmin: {
    type: S.BOOLEAN
  }
});

Usuario.addHook('beforeCreate', (usuario) => {
  usuario.salt = crypto.randomBytes(20).toString('hex');
  usuario.password = usuario.hashPassword(usuario.password);
});


Usuario.prototype.hashPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

Usuario.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = {
  Usuario,
  db
};

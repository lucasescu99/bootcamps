const S = require('sequelize');
const db = require('../config/db');

const Producto = db.define('productos', {
  marca: {
    type: S.ENUM,
    values: ['Samsung', 'iPhone', 'Motorola', 'LG', 'Xiaomi', 'Huawei'],
    allowNull: false
  },
  modelo: {
    type: S.STRING,
    allowNull: false
  },
  descripcion: {
    type: S.TEXT,
    allowNull: false
  },
  stock: {
    type: S.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  precio: {
    type: S.DECIMAL,
    allowNull: false
  },
  imagenes: {
    type: S.ARRAY(S.TEXT),
    allowNull: true
  }

});

module.exports = Producto;

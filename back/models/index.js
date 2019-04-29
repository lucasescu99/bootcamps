const Productos = require('./Producto');
const Categorias = require('./Categorias');
const Carrito = require('./Carrito')
const OrdenCompra = require('./OrdenCompra');
const Reviews = require('./Reviews');
const Usuario = require('./Usuario').Usuario;

OrdenCompra.belongsTo(Usuario, { as: 'owner' });

const modelos = {
  Categorias,
  Productos,
  Carrito,
  Usuario,
  Reviews
};

Categorias.belongsToMany(Productos, { through: 'categorias_productos' });

Productos.belongsToMany(Categorias, { through: 'categorias_productos' });
// Carrito.belongsTo(Usuario,{as:'owner'})
Usuario.belongsToMany(Productos, { through: Carrito });
Productos.belongsToMany(Usuario, { through: Carrito });

const ordenes = {
  OrdenCompra,
  Productos
};

Reviews.belongsTo(Usuario, { as: 'author' });
Reviews.belongsTo(Productos, { as: 'ref' });
OrdenCompra.belongsToMany(Productos, { through: 'orden_productos', foreignKey: "ordencompraId" });
Productos.belongsToMany(OrdenCompra, { through: 'orden_productos', foreignKey: "productoId" });

module.exports = {
  modelos,
  ordenes
};

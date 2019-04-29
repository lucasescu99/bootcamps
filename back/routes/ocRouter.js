const express = require('express');
const router = express.Router();
const OrdenCompra = require('../models/OrdenCompra');
const ordenes = require('../models/index').ordenes;
const User = require('../models/Usuario').Usuario;
const Producto = require('../models/Producto')

router.get('/adm/:modify', (req, res) => {
  OrdenCompra.findAll()
    .then(data => res.send(data));
});

router.post('/createNew', (req, res) => {
  OrdenCompra.create({ status: 'CREADO' })
    .then(nvaOrden => {
      if (req.user) nvaOrden.setOwner(req.user.id);
      nvaOrden.setProductos(req.body.productos.map(producto => producto.id));
      res.send(nvaOrden);
    });
});

router.get('/getProducts/:id', (req, res) => {
  OrdenCompra.findAll({
    include: [Producto],
    where: { id: req.params.id }
  })
    .then(ordenes => res.send(ordenes[0].productos))
})

router.put('/update', (req, res, next) => {
  OrdenCompra.findByPk(req.body.id)
    .then(orden => orden.updateAttributes(req.body.info))
    .then(update => res.send(update))
    .catch(next);
});

router.get('/getAll', (req, res) => {
  OrdenCompra.findAll()
    .then(todas => res.json(todas));
});

router.get('/getOwner/:id', (req, res) => {
  OrdenCompra.findByPk(req.params.id)
    .then(oc => {
      console.log(oc);
      if (oc.ownerId) {
        User.findByPk(oc.ownerId)
          .then(user => res.send(user));
      } else res.send('no hay owner id');
    });
});

router.get('/:id', (req, res) => {
  OrdenCompra.findByPk(req.params.id)
    .then(pm => {
      res.send(pm);
    });
});

module.exports = router;

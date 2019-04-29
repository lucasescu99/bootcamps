const express = require('express');
const router = express.Router();

const usRouter = require('./usRouter');
const prRouter = require('./prRouter');
const caRouter = require('./caRouter');
const ocRouter = require('./ocRouter');
const carrRouter = require('./carrRouter');
const rwRouter = require('./rwRouter');

router.use('/usuarios', usRouter);
router.use('/productos', prRouter);
router.use('/categorias', caRouter);
router.use('/ordencompra', ocRouter);
router.use('/carrito', carrRouter);
router.use('/reviews', rwRouter);

module.exports = router;

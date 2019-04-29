const express = require('express');
const router = express.Router();
const Reviews = require('../models/Reviews');

router.post('/newComment', (req, res) => {
  Reviews.create({ comment: 'Producto recomendado', rating: 4 })
    .then(newReview => {
      newReview.setAuthor(5);
      newReview.setRef(1);
      res.send(newReview);
    });

});

module.exports = router;

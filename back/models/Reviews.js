const S = require('sequelize');
const db = require('../config/db');

const Reviews = db.define('reviews', {
  comment: {
    type: S.TEXT
  },
  rating: {
    type: S.INTEGER
  }
});
module.exports = Reviews;

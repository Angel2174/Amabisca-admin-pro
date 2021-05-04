'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = Schema({


  title: String,
  price: String,
  image: String
  //fotos: String,
  //created_at: String


});

module.exports = mongoose.model('Item', ItemsSchema); // los parametros son ('nombre de la entidad', su_esquema)

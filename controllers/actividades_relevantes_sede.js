'use strict'
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Publication = require('../models/actividades_relevantes_sede');


function probando(req, res) {

  res.status(200).send({
	   message: 'hola desde controlador Relevantes_sede '
	 });

}

function savePublication(req, res){
  var params = req.body;

  if( !params.title && !params.price &&
!params.image) return res.status(200).send({message: 'debes enviar los campos'});

var publication = new Publication();

publication.title = params.title;
publication.price = params.price;
publication.image = params.image;
//publication.fotos = 'null';
//publication.created_at = moment().unix();

publication.save((err, publicationStored) => {
  if(err) return res.status(500).send({message: 'error al guardar '});

  if(!publicationStored) return res.status(404).send({message: 'no ha sido guardado'});

  return res.status(200).send({publication: publicationStored});
})

  var publication = new Publication();
}


module.exports = {
  probando,
  savePublication

}

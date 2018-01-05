var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Proveedor = require('../models/proveedor.js');

/* Get a todos los proveedor */
router.get('/', function (req, res, next) {
  Proveedor.find(function (err, proveedores) {
    if (err) return next(err);
    res.json(proveedores);
  });
});

/* Get proveedor por id */
router.get('/:id', function (req, res, next) {
  Proveedor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Get proveedor por nombre */
router.get('/nombre/:nombre', function (req, res, next) {
  Proveedor.find( {"nombre":{$regex: req.params.nombre, $options: 'i'}} , function (err, proveedores) {
    if (err) return next(err);
    res.json(proveedores);
  });
});

/* Get proveedor por localidad */
router.get('/localidad/:localidad', function (req, res, next) {
  Proveedor.find( {"localidad":{$regex: req.params.localidad, $options: 'i'}} , function (err, proveedores) {
    if (err) return next(err);
    res.json(proveedores);
  });
});

/* Get proveedor por nombre y/o localidad */
router.get('/mixto/:nombre/:localidad', function (req, res, next) {
  var nombre = req.params.nombre;
  var localidad = req.params.localidad;
  Proveedor.find( {$or:[{"nombre": {$regex:nombre, $options: 'i'}}, {"localidad": {$regex:localidad, $options: 'i'}}]} , function (err, proveedores) {
    if (err) return next(err);
    res.json(proveedores);
  });
});

/* Post proveedor */
router.post('/', function (req, res, next) {
  Proveedor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Put proveedor */
router.put('/:id', function (req, res, next) {
  Proveedor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete proveedor */
router.delete('/:id', function (req, res, next) {
  Proveedor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
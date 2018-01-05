var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Factura = require('../models/factura.js');

/* Get a todos las facturas */
router.get('/', function(req, res, next) {
  Factura.find(function (err, facturas) {
    if (err) return next(err);
    res.json(facturas);
  });
});

/* Get factura por id */
router.get('/:id', function(req, res, next) {
    Factura.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Post factura */
router.post('/', function(req, res, next) {
    Factura.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Put factura */
router.put('/:id', function(req, res, next) {
    Factura.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete factura */
router.delete('/:id', function(req, res, next) {
    Factura.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Presupuesto = require('../models/presupuesto.js');

/* Get a todos los presupuestos */
router.get('/', function(req, res, next) {
  Presupuesto.find(function (err, presupuestos) {
    if (err) return next(err);
    res.json(presupuestos);
  });
});

/* Get presupuesto por id */
router.get('/:id', function(req, res, next) {
  Presupuesto.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Post Presupuesto */
router.post('/', function(req, res, next) {
  Presupuesto.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Put Presupuesto */
router.put('/:id', function(req, res, next) {
  Presupuesto.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete Presupuesto */
router.delete('/:id', function(req, res, next) {
  Presupuesto.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
var mongoose = require('mongoose');

var PresupuestoSchema = new mongoose.Schema({
  proveedor: String,
  fecha: String,
  concepto: String,
  importe: Number,
  tipo: Number,
  iva: Number,
  total: Number
});

module.exports = mongoose.model('Presupuesto', PresupuestoSchema);
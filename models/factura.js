var mongoose = require('mongoose');

var FacturaSchema = new mongoose.Schema({
  proveedor: String,
  fecha: String,
  items: Object,
  base: Number,
  tipo: Number,
  iva: Number,
  total: Number
});

module.exports = mongoose.model('Factura', FacturaSchema);
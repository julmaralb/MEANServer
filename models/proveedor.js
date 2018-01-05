var mongoose = require('mongoose');

var ProveedorSchema = new mongoose.Schema({
  nombre: String,
  cif: String,
  domicilio: String,
  cp: Number,
  localidad: String,
  provincia: String,
  telefono: Number,
  email: String
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre_producto:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:40},
    precio:{type: String, required: true, max:15},
    cantidad:{type: String, required: false, max:70}
});

module.exports = mongoose.model("productos", ProductosSchema);
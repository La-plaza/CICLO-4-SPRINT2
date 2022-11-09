const Producto = require("../models/productos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let producto = new Producto({
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    })

    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.sg = "El producto se guardo correctamente"
        res.json(response)
    })
}

//importamos la depedencias de mongoose
const mongoose = require("mongoose");
//declarar dos procesos para la conexión, crear la base de datos con código
const host = "localhost";
const port = "27017";
const db = "plazacampesina";

exports.mongoConnect = () =>{
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}
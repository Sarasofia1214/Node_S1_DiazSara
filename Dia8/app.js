const {ItemModel} = require("./models/ItemModel");
const model = new ItemModel();
model.crear({nombre:"Lapicero", descripcion:"Negro"});
console.log(model.listar());
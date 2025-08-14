// controlador.js
const { loadData, saveData } = require('./modelo');
const vista = require('./vista');

function createItem() {
    const nombre = vista.nombre();
    const id = Date.now();
    const data = loadData();
    data.push({ id, nombre });
    saveData(data);
    vista.mensaje("El elemento fue agregado!");
}

function listItems() {
    vista.tabla(loadData());
}

function updateItem() {
    let data = loadData();
    vista.tabla(data);
    const id = vista.id("ID a actualizar: ");
    let item = data.find(e => e.id == id);
    if (!item) return vista.mensaje(" No encontrado.");
    item.nombre = vista.nombre();
    saveData(data);
    vista.mensaje("Actualizado.");
}

function deleteItem() {
    let data = loadData();
    vista.tabla(data);
    const id = vista.id("ID a eliminar: ");
    data = data.filter(e => e.id != id);
    saveData(data);
    vista.mensaje(" Eliminado.");
}

module.exports = { createItem, listItems, updateItem, deleteItem };

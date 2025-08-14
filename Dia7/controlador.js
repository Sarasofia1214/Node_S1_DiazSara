// controlador.js
const { loadData, saveData } = require('./modelo');
const vista = require('./vista');

function createItem() {
    const nombre = vista.pedirNombre();
    const id = Date.now();
    const data = loadData();
    data.push({ id, nombre });
    saveData(data);
    vista.mostrarMensaje("El elemento fue agregado!");
}

function listItems() {
    vista.mostrarTabla(loadData());
}

function updateItem() {
    let data = loadData();
    vista.mostrarTabla(data);
    const id = vista.pedirId("ID a actualizar: ");
    let item = data.find(e => e.id == id);
    if (!item) return vista.mostrarMensaje(" No encontrado.");
    item.nombre = vista.pedirNombre();
    saveData(data);
    vista.mostrarMensaje("Actualizado.");
}

function deleteItem() {
    let data = loadData();
    vista.mostrarTabla(data);
    const id = vista.pedirId("ID a eliminar: ");
    data = data.filter(e => e.id != id);
    saveData(data);
    vista.mostrarMensaje(" Eliminado.");
}

module.exports = { createItem, listItems, updateItem, deleteItem };

// app.js
const vista = require('./vista');
const controlador = require('./controlador');

let ejecutando = true;

while (ejecutando) {
    const opcion = vista.showMenu();
    switch (opcion) {
        case "1":
            controlador.createItem();
            break;
        case "2":
            controlador.listItems();
            break;
        case "3":
            controlador.updateItem();
            break;
        case "4":
            controlador.deleteItem();
            break;
        case "5":
            ejecutando = false;
            break;
        default:
            vista.mostrarMensaje("Opción inválida.");
    }
}

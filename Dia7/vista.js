const prompt = require('prompt-sync')();

function showMenu() {
    console.log("\n=== CRUD");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");
    return prompt("Selecciona una opción: ");
}

function nombre() {
    return prompt("Ingresa un nombre: ");
}

function id(mensaje) {
    return prompt(mensaje);
}

function tabla(data) {
    console.table(data);
}

function mensaje(mensaje) {
    console.log(mensaje);
}

module.exports = { showMenu, nombre, id, tabla, mensaje };

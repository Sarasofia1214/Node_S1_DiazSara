
// Modelo
const fs = require("fs");
const prompt = require("prompt-sync")();
const path = "db.json";

function loadData() {
    if (!fs.existsSync(path)) fs.writeFileSync(path, "[]");
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Vista
function showMenu() {
    console.log("\n=== CRUD MVC Light ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");
    return prompt("Selecciona una opción: ");
}

function showTable(data) {
    console.table(data);
}

function ask(msg) {
    return prompt(msg).trim();
}

function showMessage(msg) {
    console.log(msg);
}

// =====================
// Controlador
// =====================
function createItem() {
    const nombre = ask("Nombre: ");
    const data = loadData();
    data.push({ id: Date.now(), nombre });
    saveData(data);
    showMessage("✅ Elemento agregado.");
}

function listItems() {
    showTable(loadData());
}

function updateItem() {
    listItems();
    const id = ask("ID a actualizar: ");
    const data = loadData();
    const item = data.find(e => e.id == id);
    if (!item) return showMessage("❌ No encontrado.");
    item.nombre = ask("Nuevo nombre: ");
    saveData(data);
    showMessage("✅ Actualizado.");
}

function deleteItem() {
    listItems();
    const id = ask("ID a eliminar: ");
    let data = loadData();
    data = data.filter(e => e.id != id);
    saveData(data);
    showMessage("✅ Eliminado.");
}

// =====================
// App
// =====================
let running = true;
while (running) {
    switch (showMenu()) {
        case "1": createItem(); break;
        case "2": listItems(); break;
        case "3": updateItem(); break;
        case "4": deleteItem(); break;
        case "5": running = false; break;
        default: showMessage("Opción inválida.");
    }
}

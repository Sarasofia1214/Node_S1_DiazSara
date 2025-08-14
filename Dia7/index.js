// Modelo
const prompt= require('prompt-sync')();//Entradas por consola
const path = "db.json";//Direccionar hacia la base de datos
const fs= require('fs');//Manejo de Archivos Locales

//Modularización de Carga de la Data
function loadData(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    };// Creo el archivo con data si no existe.
    const data = fs.readFileSync(path);//Cargo y Guardo la data en una variable
    return JSON.parse(data);//Retorno la data en formato JSON
}
function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}

// Vista

function showMenu() {
  console.log("\n=== CRUD en consola con Node.js ===");
  console.log("1. Crear elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir\n");

  let opcionUsuario = prompt("Selecciona una opción: ");
  return opcionUsuario;
}


function handleMenu(option) {
  switch (option) {
    case "1":
      createItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      updateItem();
      break;
    case "4":
      deleteItem();
      break;
    case "5":
      booleanito = false;
    default:
      console.log("Opción inválida.");
  }
}

let booleanito = true;

while(booleanito){
    let opcionUsuario= showMenu();
    handleMenu(opcionUsuario);
}


// Controlador 

function createItem(){
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();// ID Unico (Paso de milisegundos desde el 1 de Enero de 1970)
    const data = loadData();
    data.push({
        id,nombre
    });
    console.log(data);
    saveData(data);
    console.log("El elemento fue agregado!");
    showMenu();
};

function listItems() {
    console.log("\n=== Lista de elementos ===");
    console.table(loadData());
};

function updateItem() {
    let data = loadData();
    console.table(data);
    let id = prompt("ID a actualizar: ");
    let item = data.find(e => e.id == id);
    if (!item) return console.log(" No encontrado.");
    item.nombre = prompt("Nuevo nombre: ");
    saveData(data);
    console.log("Actualizado.");
}

function deleteItem() {
    let data = loadData();
    console.table(data);
    let id = prompt("ID a eliminar: ");
    data = data.filter(e => e.id != id);
    saveData(data);
    console.log(" Eliminado.");
}



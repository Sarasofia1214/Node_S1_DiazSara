const prompt = require("prompt-sync")();
const {ItemModel} = require("./Models/itemModel.js");
const model = new ItemModel();

let booleanito=true;
while (booleanito==true){
    console.log("==== CRUD en Consola con Node.js ====")
    console.log("1. Crear elemento")
    console.log("2. Listar elementos")
    console.log("3. Actualizar elemento")
    console.log("4. Eliminar elemento")
    console.log("5. Salir")

    let opcionUsuario = prompt("Ingrese una opcion: ")
    switch (opcionUsuario) {
        case "1":
            let nombre = prompt("Ingrese el nombre del elemento: ")
            let descripcion = prompt("Ingrese la descripcion del elemento: ")
            model.crear({nombre:nombre,descripcion:descripcion})
            break;
        case "2":
            console.log(model.Listar())
            break;
        case "3":
            let id = prompt("Ingrese el id del elemento a actualizar: ")
            let nuevoNombre = prompt("Ingrese el nuevo nombre del elemento: ")
            let nuevaDescripcion = prompt("Ingrese la nueva descripcion del elemento: ")
            model.actualizar(id,{nombre:nuevoNombre,descripcion:nuevaDescripcion})
            break;
        case "4":
            let idEliminar = prompt("Ingrese el id del elemento a eliminar: ")
            model.eliminar(idEliminar)
            break;
        case "5":
            booleanito=false;
            break;
        default:
            console.log("Opcion no valida")
            break;
    }
};
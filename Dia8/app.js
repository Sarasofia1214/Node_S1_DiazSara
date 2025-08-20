const prompt = require("prompt-sync")();
const {ItemModel} = require("./models/itemModel.js");
const {ItemView} = require("./views/itemView.js");
const {ItemController} = require("./controllers/itemController.js");

const model = new ItemModel();
const view = ItemView;
const controller = new ItemController({model,view,prompt});

function main(){
    let booleanito=false;
    while (!booleanito){
        view.mostrarMenu();
        const op = view.OpcionMenu(prompt);
        switch (op) {
            case "1":
                controller.crear();
                break;
            case "2":
                controller.listar();
                break;
            case "3":
                controller.actualizar();
                break;
            case "4":
                controller.eliminar();
                break;
            case "0":
                booleanito=true;
                break;
            default:
                console.log("Opcion no valida")
                break;
        }
    };
}
main();
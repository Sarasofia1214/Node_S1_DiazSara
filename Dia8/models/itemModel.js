
// Modelo + repositorio en memoria para Items
//Creando la clase Item
//Crear el  ItemModel con un arreglo privado y métodos CRUD

class Item{
    constructor({id,nombre,descripcion}){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}

// ItemModel contiane los metodos 
class ItemModel{
    constructor(){
        this._items = [];
        this._seq = 1; // Uno para que en un futuro vaya incrementando
    }

    crear({nombre,descripcion}){
        const nuevo = new Item({
            id:this._seq++,  //Asigna id al nuevo producto
            nombre:(nombre || "").trim(), // Para que hacepte el valor ingresado o vacio y trim para ignorar espacios
            descripcion:(descripcion || "").trim()
        });
        this._items.push(nuevo);
        return nuevo;
    }
    Listar(){
        return [...this._items]; // Los tres puntos significa que saca la copia
    }
    buscarPorId(id){
        return this._items.find(i => i.id === Number(id)) || null;
    }
    actualizar(id,{nombre,descripcion}){
        const item = this.buscarPorId(id); //Reutilizando un método
        if(item){
            if(typeof nombre === "string") item.nombre = (nombre || "").trim(); // Verifica que sea cadana de texto y lueog si lo ingresa
            if(typeof descripcion === "string") item.descripcion = (descripcion || "").trim();
            item.actualizadoEn = new Date();
            return item;
        }
        return null;
    }
    eliminar(id){
        const index = this._items.findIndex(i => i.id === Number(id)); // idx = Abreviacion de indice
        if(index === -1)return false;
        this._items.splice(index,1); // splice es para eliminar tantos # en una posicion indices = [posicion, cantidad a eliminar]
        return true;
        
    }
}

module.exports = {ItemModel};
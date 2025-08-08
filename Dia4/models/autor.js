class autor{
    constructor(nombre,id){
        this.nombre=nombre;
        this.id=id;
        this.libros= [];
    }
addlibro(libro){
    if(!this.libros.includes(libro)){
        this.libros.push(libro);
        libro.setautor(this);
    }
}
}

module.exports=autor;
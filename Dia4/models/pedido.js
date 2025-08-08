class pedido{
    constructor(id){
        this.id=id;
        this.items= [];
    }
    additem(item){
        this.items.push(item);
   }
   total(){
    return this.items.reduce((acc,it) => acc+it.subtotal(),0);
   }
}

// se extiende y es unidireccional, item exporta un objeto y pedido recibe este objeto, 
// por lo que directamente no hay una relacion 

module.exports= pedido;
// Un pedido conoce sus items, pero cada lineitem no conoce el pedido 

class lineitem{
    constructor(producto, cantidad,preciounitario){
        this.producto=producto;
        this.cantidad=cantidad;
        this.preciounitario=preciounitario;
    }
    subtotal(){
        return this.cantidad * this.preciounitario;
    }
}

module.exports = lineitem;
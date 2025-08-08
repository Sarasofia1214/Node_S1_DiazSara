class libro{
    constructor(isbn,titulo){
        this.isbn=isbn;
        this.titulo=titulo;
        this._autor=null;
    }
    setautor(autor){
        this._autor=autor
    }
}

module.exports=libro;
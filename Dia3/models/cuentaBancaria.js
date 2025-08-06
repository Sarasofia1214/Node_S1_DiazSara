class cuentaBancaria{
    #saldo
    constructor(titular, saldoInicial){
        this.titular=titular;
        this.saldoInicial=saldoInicial;
    }
    depositar(monto){
        if(monto>0){
            this.#saldo += monto;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
}

/*  con el uso de campos # para ocultamiento
*/
module.exports= cuentaBancaria;
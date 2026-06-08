class ContaBancaria {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = 0;
    }
    depositar(valor) {
        this.#saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
    
    static ConverterParaDolar(valor) {
        const taxaCambio = 5.0;
        return valor / taxaCambio;
    }
}
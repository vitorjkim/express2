"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(_numeroConta, _saldoConta, _limiteConta, _totalDisponivel) {
        this.numeroConta = _numeroConta;
        this.saldoConta = _saldoConta;
        this.limiteConta = _limiteConta;
        this.totalDisponivel = _totalDisponivel;
    }
    getnumeroConta() {
        return this.numeroConta;
    }
    setnumeroConta(_numeroConta) {
        this.numeroConta = _numeroConta;
    }
    getsaldoConta() {
        return this.saldoConta;
    }
    setsaldoConta(_saldoConta) {
        this.saldoConta = _saldoConta;
    }
    getlimiteConta() {
        return this.limiteConta;
    }
    setlimiteConta(_limiteConta) {
        this.limiteConta = _limiteConta;
    }
    gettotalDisponivel(_horaTrabalhada, _saldoConta) {
        console.log(_horaTrabalhada + _saldoConta);
    }
    settotalDisponivel(_totalDisponivel) {
        this.totalDisponivel = _totalDisponivel;
    }
}
exports.ContaBancaria = ContaBancaria;
//# sourceMappingURL=ContaBancaria.js.map
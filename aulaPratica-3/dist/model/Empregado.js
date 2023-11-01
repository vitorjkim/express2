"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empregado = void 0;
class Empregado {
    constructor(_nome, _cpf) {
        this.nome = _nome;
        this.cpf = _cpf;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.Empregado = Empregado;
//# sourceMappingURL=Empregado.js.map
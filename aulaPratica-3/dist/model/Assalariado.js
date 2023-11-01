"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assalariado = void 0;
const Empregado_1 = require("./Empregado");
class Assalariado extends Empregado_1.Empregado {
    constructor(_nome, _cpf, _salario) {
        super(_nome, _cpf);
        this.salario = _salario;
    }
    setSalario(_salario) {
        this.salario = _salario;
    }
    getSalario() {
        return this.salario;
    }
    vencimento() {
        return this.salario;
    }
}
exports.Assalariado = Assalariado;
//# sourceMappingURL=Assalariado.js.map
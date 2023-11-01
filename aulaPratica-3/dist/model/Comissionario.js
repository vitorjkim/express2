"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comissionado = void 0;
const Empregado_1 = require("./Empregado");
class Comissionado extends Empregado_1.Empregado {
    constructor(_nome, _cpf, _totalVendas, _taxaComissao) {
        super(_nome, _cpf);
        this.totalVendas = _totalVendas;
        this.taxaComissao = _taxaComissao;
    }
    setTotalVendas(_totalVendas) {
        this.totalVendas = _totalVendas;
    }
    getTotalVendas() {
        return this.totalVendas;
    }
    setTaxaComissao(_taxaComissao) {
        this.taxaComissao = _taxaComissao;
    }
    getTaxaComissao() {
        return this.taxaComissao;
    }
    vencimento() {
        return this.totalVendas + (this.totalVendas * this.taxaComissao);
    }
}
exports.Comissionado = Comissionado;
//# sourceMappingURL=Comissionario.js.map
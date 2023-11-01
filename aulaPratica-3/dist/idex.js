"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = require("./model/ContaBancaria");
const Empregado_1 = require("./model/Empregado");
const a1 = new ContaBancaria_1.ContaBancaria(`111`, 200, 380, 1000);
console.log(a1);
a1.setnumeroConta(`222`);
a1.setsaldoConta(1000);
a1.setlimiteConta(2000);
console.log(a1.gettotalDisponivel);
const emp = new Empregado_1.Empregado('Vitor', 30, 8);
console.log(emp);
emp.setNome(`Joaquim`);
emp.setvalorHora(40);
emp.sethoraTrabalhada(9);
console.log(emp.gethoraTrabalhada() * emp.getvalorHora());
//# sourceMappingURL=idex.js.map
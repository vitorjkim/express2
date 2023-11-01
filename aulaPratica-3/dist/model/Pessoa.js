"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     *
     * @returns
     */
    getCpf() {
        return this.cpf;
    }
    /**
     *
     * @param _cpf
     */
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    /**
     *  Atripui o telefone para pessoa
     *
     * @param _telefone
     * telefone da pessoa
     */
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    /**
     *  Atripui o endereço para pessoa
     *
     * @param _endereco
     * endereço da pessoa
     */
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    /**
     *  Atripui altura para pessoa
     * @param _altura
     *
     * altura da pessoa
     */
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    /**
     * Atripui peso para pessoa
     *
     * @param _peso
     * peso da pessoa
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome:${this.nome}
                    Cpf:${this.cpf}
                    Data:${this.data_nascimento}
                    Telefone:${this.telefone}
                    Endereço:${this.endereco}
                    Altura:${this.altura}
                    Peso:${this.peso}`);
    }
    //implementar os metodos
    falar() {
        //Logica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //Logica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    andarQuilometro(_quilometro) {
        console.log(`${this.nome} andou: ${_quilometro} km`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} comeu: ${_prato}`);
    }
    /**
     *
     * CRUD
     */
    cadastroPessoa(pessoa) {
        //persistindo os dados
        console.log(`${pessoa.nome} cadastrado(a) com sucesso!`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map
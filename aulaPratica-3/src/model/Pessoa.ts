export class Pessoa {

    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;


    public constructor (
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number) {
            
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
    }

    public getNome() {
        return this.nome;
    }

    public setNome(_nome: string){
        this.nome = _nome;
    }
    /**
     * 
     * @returns 
     */
    public getCpf() {
        return this.cpf;
    }
    
    /**
     * 
     * @param _cpf 
     */
    public setCpf(_cpf: string){
        this.cpf = _cpf;
    }

    public getData_Nascimento() {
        return this.data_nascimento;
    }

    public setData_Nascimento(_data_nascimento: Date){
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone() {
        return this.telefone;
    }


    /**
     *  Atripui o telefone para pessoa
     * 
     * @param _telefone
     * telefone da pessoa 
     */
    public setTelefone(_telefone: string){
        this.telefone = _telefone;
    }

    public getEndereco() {
        return this.endereco;
    }


    /**
     *  Atripui o endereço para pessoa
     * 
     * @param _endereco 
     * endereço da pessoa
     */
    public setEndereco(_endereco: string){
        this.endereco = _endereco;
    }

    public getAltura() {
        return this.altura;
    }

    /**
     *  Atripui altura para pessoa
     * @param _altura
     * 
     * altura da pessoa 
     */
    public setAltura(_altura: number){
        this.altura = _altura;
    }

    public getPeso() {
        return this.peso;
    }

    /**
     * Atripui peso para pessoa
     * 
     * @param _peso 
     * peso da pessoa
     */
    public setPeso(_peso: number){
        this.peso = _peso;
    }

    public mostraPessoa(){
        console.log(`Nome:${this.nome}
                    Cpf:${this.cpf}
                    Data:${this.data_nascimento}
                    Telefone:${this.telefone}
                    Endereço:${this.endereco}
                    Altura:${this.altura}
                    Peso:${this.peso}`)
    }

    //implementar os metodos
    public falar():void {
        //Logica de negócio
        console.log(`${this.nome} está falando`)
    }

    public falarFrase(_frase: string){
        //Logica de negócio
        console.log(`${this.nome} fala: ${_frase}`)
    }

    public andar():void {
        console.log(`${this.nome} está andando`)
    }

    public andarQuilometro(_quilometro: number):void {
        console.log(`${this.nome} andou: ${_quilometro} km`)
    }

    public comer():void {
        console.log(`${this.nome} está comendo`)
    }

    public comerPrato(_prato: string):void {
        console.log(`${this.nome} comeu: ${_prato}`)
    }

    /**
     * 
     * CRUD
     */
    cadastroPessoa(pessoa: Pessoa) {
        //persistindo os dados
        console.log(`${pessoa.nome} cadastrado(a) com sucesso!`)
    }

}




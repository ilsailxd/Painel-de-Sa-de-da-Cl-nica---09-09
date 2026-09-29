//criando a classe Cliente

class Cliente{
    //criação de atrubutos
    #nome;
    #altura;
    #peso;

    //criação de métodos
    constructor(
        nome,
        altura, 
        peso){
            this.#nome = nome;
            this.#altura = Number(altura);
            this.#peso = Number(peso);
    }
}
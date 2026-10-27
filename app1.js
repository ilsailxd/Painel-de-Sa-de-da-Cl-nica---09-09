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
class PainelApp
{
    #clientes = [];
    #form;
    #tabelaCorpo;
     
    constructor(){
        this.#form = document.getElementById('form-paciente');
        this.#tabelaCorpo = document.getElementById('tabela-paciente-corpo')
    }

    iniciar(){
    this.#configurarEventos();
}
    #configurarEventos(){
    this.#form.addEventListener('submit', (evento)=>{
    this.#cadastrarCliente(evento)});
    }
    #cadastrarCliente(evento){
    evento.preventDefault();

    const nomeInput = document.getElementById('nome').value.trim();
    const AlturaInput = document.getElementById('altura').value;
    const PesoInput = document.getElementById('peso').value;

    const novoCliente = new Cliente(nomeInput,AlturaInput,PesoInput)

    this.#clientes.push(novoCliente);

    this.#renderizarTabela();
    this.#form.reset();
    document.getElementById('nome').focus();
    }
    #renderizarTabela(){
        this.#tabelaCorpo.innerHTML ='';
        this.#clientes.forEach((Cliente) => {
            const linha = document.createElement('tr');
        linha.innerHTML ='<td>$(cliente.nome)</td>
        <td>$(this.#clientes.altura.tofixed(2))</td>
        <td>$(cliente.peso.toFixed(2))</td>
        <td>$(cliente.calcularIMC())</td>
        <td>$(cliente.definirClassificacao())</td>'
        })

        this.#tabelaCorpo.appendChild(linha);

    }

}

const app= new PainelApp();

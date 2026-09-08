
class Cliente {
    #nome;
    #altura;
    #peso;

    constructor(nome, altura, peso) {
        this.#nome = nome;
        this.#altura = parseFloat(altura);
        this.#peso = parseFloat(peso);
    }

    get nome() { return this.#nome; }
    get altura() { return this.#altura; }
    get peso() { return this.#peso; }

    calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    definirClassificacao() {
        const imc = this.calcularIMC();
        switch (true) {
            case imc < 18.5:
                return 'Abaixo do peso';
            case imc >= 18.5 && imc <= 24.9:
                return 'Peso normal';
            case imc >= 25.0 && imc <= 29.9:
                return 'Sobrepeso';
            case imc >= 30.0 && imc <= 34.9:
                return 'Obesidade Grau I';
            case imc >= 35.0 && imc <= 39.9:
                return 'Obesidade Grau II';
            default:
                return 'Obesidade Grau III';
        }
    }
}

// Classe Utilitaria para manipulacao do DOM
class ManipuladorDOM {
    constructor(seletorTabelaBody) {
        this.tabelaBody = document.querySelector(seletorTabelaBody);
    }

    limparTabela() {
        this.tabelaBody.innerHTML = '';
    }

    renderizarLinha(cliente) {
        const tr = document.createElement('tr');
        const imcFormatado = cliente.calcularIMC().toFixed(2);
        const classificacao = cliente.definirClassificacao();

        tr.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.altura.toFixed(2)}</td>
            <td>${cliente.peso.toFixed(1)}</td>
            <td>${imcFormatado}</td>
            <td>${classificacao}</td>
        `;

        this.tabelaBody.appendChild(tr);
    }
}

// Classe Controladora da Aplicação
class PainelApp {
    constructor() {
        this.clientes = [];
        this.dom = new ManipuladorDOM('#tabela-pacientes');
        this.form = document.querySelector('#form-paciente');
        this.iniciarEventos();
    }

    iniciarEventos() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.adicionarCliente();
        });
    }

    adicionarCliente() {
        const nome = document.querySelector('#nome').value;
        const altura = document.querySelector('#altura').value;
        const peso = document.querySelector('#peso').value;

        if (altura <= 0 || peso <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const novoCliente = new Cliente(nome, altura, peso);
        this.clientes.push(novoCliente);

        this.renderizarPainel();
        this.form.reset();
    }

    renderizarPainel() {
        this.dom.limparTabela();
        this.clientes.forEach((cliente) => {
            this.dom.renderizarLinha(cliente);
        });
    }
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
    new PainelApp();
});
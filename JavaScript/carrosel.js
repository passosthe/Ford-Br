class Carrossel {
    constructor(imagens) {
        // Lista de objetos [imagem,titulo,url]
        this.imagens = imagens;
        // controle do slide atual (começa em 0)
        this.indiceAtual = 0;
        // Armazena a referencia do intervalo (null para indicar que inicialmente não há intervalo de execução, só existirá após chamar o método)
        this.intervalo = null;
        this.elementoImagem = document.getElementById('carrosselImagem');
        this.elementoTitulo = document.getElementById('carrosselTitulo');
        this.elementoLink = document.getElementById('carrosselLink');

        this.botaoAnterior = document.querySelector('.botao-anterior');
        this.botaoProximo = document.querySelector('.botao-proximo');

        this.botaoAnterior.addEventListener('click', () => this.anterior());
        this.botaoProximo.addEventListener('click', () => this.proximo());
    }

    exibirConteudo(){
        const conteudoAtual = this.imagens[this.indiceAtual];
        // Altera a imagem do carrossel
        this.elementoImagem.src = conteudoAtual.imagem;
        //Altera o texto do titulo 
        this.elementoTitulo.textContent = conteudoAtual.titulo;
        // Altera o link
        this.elementoLink.href = conteudoAtual.url;
    }



    anterior(){
        // this.exibirConteudo();
        // // cria um intervalo repetitivo
        // this.intervalo = setInterval(() => this.proximo(), 2000);
        // this.reiniciarIntervalo();
        this.indiceAtual = (this.indiceAtual - 1 + this.imagens.length) % this.imagens.length;
        this.exibirConteudo();
        this.reiniciarIntervalo();
    }

    proximo(){
        // incremento do indice e garantia que o indice nunca seja maior que o número de imagens
        this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
        this.exibirConteudo();
        this.reiniciarIntervalo();
    }

    reiniciarIntervalo() {
        clearInterval(this.intervalo);
        this.intervalo = setInterval(() => this.proximo(), 2000);
    }

    iniciar() {
        this.exibirConteudo();
        this.reiniciarIntervalo();
    }
}

const imagens = [
    {
        imagem: './assets/img/imagem_1.jpg',
        titulo: 'Nova Ford Ranger 2022',
        url: '#'
    },
    {
        imagem: './assets/img/imagem_2.jpg',
        titulo: 'Primeiro Carro da Ford',
        url: '#'
    },
    {
        imagem: './assets/img/imagem_3.jpg',
        titulo: 'Ford Bronco 2021',
        url: '#'
    }
]

const meuCarrossel = new Carrossel(imagens);
meuCarrossel.iniciar();
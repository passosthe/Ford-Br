class Carro {
    constructor (
        imagem,
        modelo,
        alturaCacamba,
        alturaVeiculo,
        alturaLivreSolo,
        capacidadeCarga,
        motor,
        potencia,
        volumeCacamba,
        roda,
        preco
    ){
        this.imagem = imagem,
        this.modelo = modelo,
        this.alturaCacamba = alturaCacamba,
        this.alturaVeiculo = alturaVeiculo,
        this.alturaLivreSolo = alturaLivreSolo,
        this.capacidadeCarga = capacidadeCarga,
        this.motor = motor,
        this.potencia = potencia,
        this.volumeCacamba = volumeCacamba,
        this.roda = roda,
        this.preco = preco
    }
}

const tabelaComparacao = document.getElementById("dialog-Tabela");
const botaoComparacao = document.getElementById("botao");
const checkbox = document.getElementById("checkbox")
const dialogErro = document.getElementById('mensagemErro')

const carros = [
    { 
    imagem: './assets/img/XL Cabine.jpg',
    modelo: 'XL Cabine Simples 2.2 Diesel 4x4 MT 2022',
    alturaCacamba: 511,
    alturaVeiculo: 1821,
    alturaLivreSolo: 232,
    capacidadeCarga: 1234,
    motor: 2.2,
    potencia: 160,
    volumeCacamba: 1420,
    roda: 'Aço Estampado 16',
    preco: 'R$ 183.850,00'
    },
    { 
    imagem: 'assets/img/xls 2.2 diesel.jpg',
    modelo: 'Ford Ranger XLS 2.2 Diesel 4x4 AT- 2022',
    alturaCacamba: 511,
    alturaVeiculo: 1816,
    alturaLivreSolo: 237,
    capacidadeCarga: 930,
    motor: 2.2,
    potencia: 160,
    volumeCacamba: 1210,
    roda: 'Aço Estampado 16',
    preco: 'R$ 200.350,00'
    },
    { 
    imagem: 'assets/img/storm.jpg',
    modelo: 'Storm 3.2 Diesel 4x4 AT 2022',
    alturaCacamba: 511,
    alturaVeiculo: 1821,
    alturaLivreSolo: 232,
    capacidadeCarga: 1040,
    motor: 3.2,
    potencia: 200,
    volumeCacamba: 1180,
    roda: 'Liga Leve 17',
    preco: 'R$ 222.790,00'
    }
 ]

// Dados dinâmicos
let carrosSelecionados = [];


// Encontra a posição de um carro na lista carrosSelecionados
function posicaoDoCarroNaLista (carro) {
    return carrosSelecionados.findIndex(c => c.modelo === carro.modelo);
}

//função que vai adicionar ou remover um carro na lista de carros
function clickinput (checkbox, posicaoCarro) {
    // busca o objeto do carro
    const carroEscolhido = carros[posicaoCarro];
    
    // O usuário tirou um carro do input?
    if (!checkbox.checked) { 
        const indice = posicaoDoCarroNaLista(carroEscolhido);
        carrosSelecionados.splice(indice, 1);
        return; 
    }

    if(carrosSelecionados.length > 1) {
        checkbox.checked = false;
        dialogErro.showModal();
        return;
    }
    // Adiciona o objeto na lista
    carrosSelecionados.push(carroEscolhido);
}



function atualizarDados(){
    
    const imagemUm = document.getElementById('carro-imagem-1');
    const imagemDois = document.getElementById('carro-imagem-2');

    imagemUm.src = carrosSelecionados[0].imagem;
    imagemDois.src = carrosSelecionados[1].imagem;
    
    document.getElementById('carro-modelo-1').textContent = carrosSelecionados[0].modelo;
    document.getElementById('carro-modelo-2').textContent = carrosSelecionados[1].modelo;
    
    document.getElementById('carro-alturaCacamba-1').textContent = carrosSelecionados[0].alturaCacamba;
    document.getElementById('carro-alturaCacamba-2').textContent = carrosSelecionados[1].alturaCacamba;
    
    document.getElementById('carro-alturaVeiculo-1').textContent = carrosSelecionados[0].alturaVeiculo;
    document.getElementById('carro-alturaVeiculo-2').textContent = carrosSelecionados[1].alturaVeiculo;
    
    document.getElementById('carro-alturaLivreSolo-1').textContent = carrosSelecionados[0].alturaLivreSolo;
    document.getElementById('carro-alturaLivreSolo-2').textContent = carrosSelecionados[1].alturaLivreSolo;
    
    document.getElementById('carro-capacidadeCarga-1').textContent = carrosSelecionados[0].capacidadeCarga;
    document.getElementById('carro-capacidadeCarga-2').textContent = carrosSelecionados[1].capacidadeCarga;
    
    document.getElementById('carro-motor-1').textContent = carrosSelecionados[0].motor;
    document.getElementById('carro-motor-2').textContent = carrosSelecionados[1].motor;
    
    document.getElementById('carro-potencia-1').textContent = carrosSelecionados[0].potencia;
    document.getElementById('carro-potencia-2').textContent = carrosSelecionados[1].potencia;
    
    document.getElementById('carro-volumeCacamba-1').textContent = carrosSelecionados[0].volumeCacamba;
    document.getElementById('carro-volumeCacamba-2').textContent = carrosSelecionados[1].volumeCacamba;
    
    document.getElementById('carro-roda-1').textContent = carrosSelecionados[0].roda;
    document.getElementById('carro-roda-2').textContent = carrosSelecionados[1].roda;
    
    document.getElementById('carro-preco-1').textContent = carrosSelecionados[0].preco;
    document.getElementById('carro-preco-2').textContent = carrosSelecionados[1].preco;
}
// ShowCompare - exibe a tabela de comparação
function exibirComparacao () {
    if (carrosSelecionados.length !== 2) {
        dialogErro.showModal();
        return;
    }

    atualizarDados();

    tabelaComparacao.showModal();
}

function esconderComparacao(){
    tabelaComparacao.close();
    dialogErro.close();
}
    
    
    
    
    








//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor
const prompt = require('prompt-sync')();

let velocidadeCarro = parseInt(prompt("Qual é a sua velocidade atual (KMh)? "));
if (velocidadeCarro > 80){
    let multa = 5*velocidadeCarro;
    console.log(`Voce foi multado em R$ ${multa},00`);
}
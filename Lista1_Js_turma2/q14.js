//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')();

let valor = prompt("Digite o numero que queira saber o valor fatorial: ");

for (let index = valor-1; index >= 1; index--) {

    valor *= index;
}

console.log(valor);
//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require('prompt-sync')();

let valor = prompt("Digite o numero que queira saber a tabuada: ");

for (let i = 1; i <= 10; i++) {
    console.log(` ${valor} X ${i} = ${valor*i}`);
}
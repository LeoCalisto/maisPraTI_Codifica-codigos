//Maior entre dois números(valores não iguais)
const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));

console.log(num1<num2 ? num1 + ", " + num2 : num2 + ", " + num1);
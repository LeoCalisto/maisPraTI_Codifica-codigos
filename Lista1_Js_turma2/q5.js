//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

let altura = prompt("Digite sua atura em cm: ");
let peso = prompt("Digite seu peso em Kg: ");

let imc = peso / (altura**2);

if (imc >= 30.0) {
    console.log("Estado de obesidade");
}else if (imc >= 25.0) {
    console.log("Estado de sobrepeso");
}else if (imc >= 18.5) {
    console.log("Estado de peso normal");
}else{
    console.log("Estado de baixo peso");
}
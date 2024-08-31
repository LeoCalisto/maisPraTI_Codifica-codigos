//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')();

let valorFinal;
let quantiaMaca = parseInt(prompt("Quantas maçãs foram compradas? "));

if (quantiaMaca < 12){
    valorFinal = quantiaMaca*0.30
}else{
    valorFinal = quantiaMaca*0.25
}
console.log(`O valor a ser pago é: ${valorFinal}`);
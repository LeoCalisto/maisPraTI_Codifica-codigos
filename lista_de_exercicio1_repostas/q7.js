//operação simples de acordo condicional
const prompt = require('prompt-sync')();

let valorTotal;
let totalFruta = parseInt(prompt("Quantas maçãs foram compradas? "));

if (totalFruta < 12){
    valorTotal = totalFruta*0.30
}else{
    valorTotal = totalFruta*0.25
}
console.log(`O valor a ser pago é: ${valorTotal}`);
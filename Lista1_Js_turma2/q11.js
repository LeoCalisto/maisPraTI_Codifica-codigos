
const prompt = require('prompt-sync')();
let resultado;
for (let i = 1; i <= 5; i++) {
    let valor = prompt("Digite o número: ");
    resultado+=valor;
}
console.log("A soma dos números é: " + resultado);

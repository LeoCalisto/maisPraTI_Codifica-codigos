//imprime nome da região baseado num range de index
const prompt = require('prompt-sync')();



console.log("1 - Imprime o número 1");
console.log("2 - Imprime o número 2");
console.log("3 - Imprime o número 3");
let regiao;
let codigo = parseInt(prompt("Digite o número da opção "));

switch (codigo){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3 :
        console.log("3");
        break;
    default:
        console.log("número digitado não corresponde as opções");
        break;
}
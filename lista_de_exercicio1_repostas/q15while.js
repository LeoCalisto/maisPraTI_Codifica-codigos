//Média ponderada entre n decimais
const prompt = require('prompt-sync')();

let somaValores = 0;
let somaPesos = 0;
let numero = parseFloat(prompt("Digite o decimal: "));

while(numero != 0){
    let peso = Number(prompt("Digite o peso do número: "));
    somaValores += numero*peso;
    somaPesos +=peso;
    numero = parseFloat(prompt("Digite o decimal: "));
}
if(somaValores == 0){
    console.log("Nenhum número foi digitado para calculo!! ");
}else if(numero == 0 && somaValores != 0){
    console.log(somaValores/somaPesos);
}
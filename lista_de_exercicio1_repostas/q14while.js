const prompt = require('prompt-sync')();
let somaValores = 0;
let contagem = 0;
let numero = parseFloat(prompt("Digite o numero decimal: "));

while(numero != 0){
    somaValores += numero;
    contagem++;
    numero = parseFloat(prompt("Digite o numero decimal: "));
}
if(somaValores == 0){
    console.log("Nenhum numero foi digitado para calculo!! ");
}else if(numero == 0 && somaValores!=0){
    console.log((somaValores/contagem).toFixed(2));
}
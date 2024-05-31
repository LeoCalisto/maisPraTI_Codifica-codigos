// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. 
const prompt = require ('prompt-sync')();
let cigarroDia = parseInt(prompt("Quantos cigarros fumados no dia?"))
let anosFumando = parseInt(prompt("Quantos anos fumando?"))

console.log(calcularDiasPerdidos(cigarroDia,anosFumando
));

function calcularDiasPerdidos(cigarroDia,anosFumando){
    return (10*cigarroDia*(365*anosFumando))/60*24;
}

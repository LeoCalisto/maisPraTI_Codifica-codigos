//Média entre duas notas retornando aprovação
const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

media = (nota1 + nota2)/2;

if (media >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}
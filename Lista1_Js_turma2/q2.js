//Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite sua idade: "));

if (nota >= 18){
    console.log("PARABÉNS! Você já é adulto")
}else if(nota >= 14){
    console.log("Você é adolescente");
}else{
    console.log("Você ainda é criança");
};
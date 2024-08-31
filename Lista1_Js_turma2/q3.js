//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite sua nota: "));

if (nota >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}else if(nota >= 4){
    console.log("Você  está de recuperação");
}else{
    console.log("Você  foi REPROVADO! Estude mais");
};
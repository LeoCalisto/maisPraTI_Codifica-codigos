//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
const prompt = require('prompt-sync')();
const reta = [];

for (i = 0; i<3;i++){
    reta[i] = parseInt(prompt(`Qual o tamanho da reta ${i+1} ?`));
}

if ((reta[0] + reta[1] > reta[2]) && (reta[0] + reta[2] > reta[1]) && (reta[1] + reta[2] > reta[0])){
    console.log("As retas formam um triangulo !!");
}else{
    console.log("As retas não formam um triangulo !!");
}
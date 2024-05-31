//17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
const prompt = require('prompt-sync')();
const nomes = new Array(9);
const idades = new Array(9);

for (let i = 0; i < nomes.length; i++) {
    nomes[i] = prompt(`Digite o nome do individuo ${i}: `);
    idades[i] = parseInt(prompt(`Agora, digite a idade do individuo ${i}: `));
}

console.log("Os menores de idade são: ")
for (index in idades) {
    if (idades[index] < 18){
        console.log(`${nomes[index]} : ${idades[index]} anos`)
    }
}
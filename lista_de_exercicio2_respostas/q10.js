//10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.
const prompt = require('prompt-sync')();
let continuar = 's', numero,somaNumeros = 0, quantidadeNumeros = 0, par = 0, menor;
do {
    numero = parseInt(prompt("Digite um numero: "));
    if(quantidadeNumeros == 0){
        menor = numero
    }else{
       (numero < menor) ? menor = numero : "";
    }
    somaNumeros += numero;
    quantidadeNumeros++;
    (numero % 2==0) ? par++ : "";
    continuar = prompt("Continuar inserindo numeros s/n ?  ");
} while (continuar == 's' || continuar == 'S');

console.log(`A soma dos números é ${somaNumeros}`);
console.log(`O menor valor digitado foi ${menor}`);
console.log(`A média entre todos os valores é ${somaNumeros/quantidadeNumeros}`);
console.log(`Dos números informados ${par} são pares`);
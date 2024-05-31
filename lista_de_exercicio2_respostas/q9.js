//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
const prompt = require('prompt-sync')();
let salHomens = 0, salMulheres = 0,sexo,continuar = 'S';

while (continuar == 'S' || continuar == 's') {
    sexo = prompt("Qual é sexo do funcionário(a): (M/F) ");
    if (sexo == 'M' || sexo == 'm') {
        salMulheres += parseFloat(prompt("Digite o salário recebido: "));
    }else{
        salHomens += parseFloat(prompt("Digite o salário recebido: "));
    }
    continuar = prompt("Continuar cadastrando ? (S/N) ");
}
console.log(`O total de salários para mulheres é R$ ${salMulheres} e para homens é R$ ${salHomens}`);
//22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00. 
const promt = require('prompt-sync')();
const habitantes = [];
let continuar = true, somaSalario = 0, somaFilhos = 0, maiorSalario;

while (continuar){
    let salario = promt("Digite o salario do individuo: ");
    let filhos = promt("Digite quantos filhos esse individuo possui? ")
    cadastrarHabitante(salario,filhos,habitantes)
    let resp = promt("Continuar cadastrando s/n? ");
    continuar =  resp == 'S' || resp == 's' ? true : false;
}

for (let i = 0; i < array.length; i++) {
    somaSalario += habitantes[i].salario;
    somaFilhos += habitantes[i].filhos;
    if (i == 0) {
        maiorSalario = habitantes[0].salario;
    }else if(habitantes[i].salario > maiorSalario){
        maiorSalario = habitantes[i].salario;
    }
}

const cadastrarHabitante = function (salario,filhos,vetor){
    vetor.push({
        salario,
        filhos
    })
}
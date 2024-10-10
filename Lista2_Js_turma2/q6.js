// Filtrando Arrays de Objetos
//Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

let funcionarios = [
    {nome:"Marcos", cargo:"Pedreiro", salario:2000},
    {nome:"Cleiton", cargo:"Ajudante", salario:1000},
    {nome:"Silva", cargo:"Garçon", salario:1500}
]


for (const func of funcionarios) {
    if (func.salario > 1500) {
        console.log(func);
    }
}
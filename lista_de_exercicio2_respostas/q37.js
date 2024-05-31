//37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require('prompt-sync')();
const gabarito = new Array(20), alunos = new Array(50), resultados = new Array(50);

for (let n = 0; n < gabarito.length; n++) {
    gabarito[n] = prompt(`Digite a alternativa ${n} do gabarito: `).toLowerCase().charAt(0);
}
console.log();

for (let i = 0; i < alunos.length; i++) {

    let acertos = 0;
    const escolhaAluno = new Array(20);
    for (let x = 0; x < escolhaAluno.length; x++) {

        escolhaAluno[x] = prompt(`Digite a alternativa ${x} escolhida: `).toLowerCase().charAt(0);
        if (escolhaAluno[x] == gabarito[x]) {
            acertos++;
        }

    }
    console.log();

    alunos[i] = escolhaAluno;
    resultados[i] = acertos;
    console.log(escolhaAluno[i]);
    console.log(`O Aluno ${i} acertou ${resultados[i]}.`);
    if (resultados[i] >= 12) {
        console.log("Parabéns, APROVADO!!")
    }
}

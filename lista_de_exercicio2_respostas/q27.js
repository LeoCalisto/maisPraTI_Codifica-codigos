//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36).Escrever o vetor V no final.
const prompt = require('prompt-sync')();
const M = criarMatrizPreenchida(6, 6);
const vetorProduto = [];
let pos = 0;

let num = prompt("Por qual valor deseja multiplicar a matriz gerada? ");

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        vetorProduto[pos] = M[i][j] * num
        pos++
    }
}
console.log("produto: ");
console.log(vetorProduto);


function criarMatrizPreenchida(linha, coluna) {

    const matriz = [];
    for (let l = 0; l < linha; l++) {
        let tempLinha = [];
        for (let c = 0; c < coluna; c++) {
            tempLinha[c] = Math.floor(Math.random() * (11));
        }
        matriz.push(tempLinha.slice());
    }
    return matriz;
}
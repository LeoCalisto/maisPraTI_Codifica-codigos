//32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.

const M = criarMatrizPreenchida(12,13);
let NM = [];

for (let i = 0; i < M.length; i++) {
    let maior = 0, temp = [];
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] > maior) {
            maior = M[i][j];
        }
    }

    for (let c = 0; c < M[i].length; c++) {
        temp[c] = (M[i][c] / maior).toFixed(2) ;
    }

    NM.push(temp.slice());
}

for (const linha of M) {
    console.log(linha);
}
for (const linha of NM) {
    console.log(linha);
}

function criarMatrizPreenchida(linha, coluna) {

    const matriz = [];
    for (let l = 0; l < linha; l++) {
        let tempLinha = [];
        for (let c = 0; c < coluna; c++) {
            tempLinha[c] = Math.floor(Math.random() * (10));
        }
        matriz.push(tempLinha.slice());
    }
    return matriz;
}
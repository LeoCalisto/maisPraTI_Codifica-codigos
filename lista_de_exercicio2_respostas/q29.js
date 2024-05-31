// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.
const M = criarMatrizPreenchida(4,6);
let somaL4 = 0, somaC2 = 0, somaDiagonal = 0, somaGeral = 0;


for (let n = 0; n < M[3].length; n++) {
    somaL4 += M[3][n];
}

for (let i = 0; i < M.length; i++) {
    somaC2 += parseInt(M[i][1]);
    somaDiagonal += M[i][i];
    for (let j = 0; j < M[i].length; j++) {
        somaGeral += M[i][j];
        
    }
}

for (const linha of M) {
    console.log(linha);
}
console.log("Soma da linha 4: " + somaL4);
console.log("Soma da coluna 2: " + somaC2);
console.log("Soma da diagonal principal: " + somaDiagonal);
console.log("Soma de todos os elementos da matriz: " + somaGeral);

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
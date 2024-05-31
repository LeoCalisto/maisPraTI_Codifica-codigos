//30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.
const M = criarMatrizPreenchida(5, 5);
const SL = new Array(M.length), SC = new Array(M[0].length);
SL.fill(0);
SC.fill(0);
for (let l = 0; l < M.length; l++) {
    for (let c = 0; c < M[l].length; c++) {
        SL[l] += M[l][c];
        SC[c] += M[l][c];
    }
}
for (const linha of M) {
    console.log(...linha);
}
console.log("Soma linha a linha: " + SL);
console.log("Soma coluna a culuna: " + SC);

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
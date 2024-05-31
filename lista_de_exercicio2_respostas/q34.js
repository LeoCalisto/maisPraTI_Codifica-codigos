//34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.
const M = criarMatrizPreenchida(50, 50);

for (let i = 0; i < M.length; i++) {
    console.log(M[i]);
}

console.log("Resultado:");
for (let i = 0; i < M.length; i++) {
    let elementoDiag = M[i][i];
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] = (M[i][j] * elementoDiag).toFixed(1);
    }
    console.log(M[i]);
}

function criarMatrizPreenchida(linha, coluna) {

    const matriz = [];
    for (let l = 0; l < linha; l++) {
        let tempLinha = [];
        for (let c = 0; c < coluna; c++) {
            tempLinha[c] = (Math.random() * (10)).toFixed(1);
        }
        matriz.push(tempLinha.slice());
    }
    return matriz;
}
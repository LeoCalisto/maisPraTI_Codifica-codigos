//33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
const M = criarMatrizPreenchida(3, 3);
let mediaElementos = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if (i + j == M.length - 1) {
            mediaElementos += M[i][j];
        }
    }
    console.log(M[i]);
}

mediaElementos /= M.length;
console.log("Resultado:");
for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if (i == j) {
            M[i][j] *= Math.round(mediaElementos);
        }
    }
    console.log(M[i]);
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
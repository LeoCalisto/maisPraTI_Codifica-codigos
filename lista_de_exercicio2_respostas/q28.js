// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;
const M = criarMatrizPreenchida(10, 10);
let somaMenor = 0; somaMaior = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if (j < i) {
            somaMenor += M[i][j];
        } else if (j > i) {
            somaMaior += M[i][j];
        }
    }
}
console.log("A soma dos valores acima da diagonal principal é : " + somaMaior);
console.log("A soma dos valores abaixo da diagonal principal é : " + somaMenor);

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
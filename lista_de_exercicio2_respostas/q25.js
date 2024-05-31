//25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
const M = criarMatrizPreenchida(2,3);

console.log(M);
imprimeSoma(M,3);

function imprimeSoma(matriz,qtColunas){
    const somaColuna = new Array(qtColunas);
    somaColuna.fill(0);

    for (const linha of matriz) {
        for (const indiceColuna in linha) {
            somaColuna[indiceColuna] += linha[indiceColuna];
        }
    }
    
    for (const numero of somaColuna) {
        console.log(numero.toFixed(1));
    }
}

// função criada para ganhar tempo não digitando valor por valor
function criarMatrizPreenchida(linha,coluna){

    const matriz = [];
    for (let l = 0; l < linha; l++) {
        let tempLinha = [];
        for (let c = 0; c < coluna; c++) {
            tempLinha[c] = parseFloat((Math.random() * (10)).toFixed(1));
        } 
        matriz.push(tempLinha.slice());
    }
    return matriz;
}
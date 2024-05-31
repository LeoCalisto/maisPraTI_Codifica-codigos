//24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
const M = criarMatrizPreenchida(3,5);
const vetorResposta = [];

for (let linha in M) {

    let contagem = 0
    for (let numero of M[linha]) {
        (numero < 0) ? contagem++ : ""
    }
    vetorResposta[linha] = contagem;
}

console.log(M);
console.log(vetorResposta);

// função criada para ganhar tempo não digitando valor por valor
function criarMatrizPreenchida(linha,coluna){

    const matriz = [];
    for (let l = 0; l < linha; l++) {
        let tempLinha = [];
        for (let c = 0; c < coluna; c++) {
            tempLinha[c] = Math.floor(Math.random() * (20) - 10);
        } 
        let linhaVetor = tempLinha.slice();
        matriz.push(tempLinha);
    }
    return matriz;
}

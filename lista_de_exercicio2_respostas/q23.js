//23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
let indiceMatriz = 5;

for (const linha of criarMatrizIdentidade(indiceMatriz)) {
    console.log(linha)
}

function criarMatrizIdentidade(indiceMatriz){

    const matrizIdentidade = [];
    for (let l = 0; l < indiceMatriz; l++) {
        let tempLinhaMatriz = [];
        for (let c = 0; c < indiceMatriz; c++) {
            if(c==l){
                tempLinhaMatriz[c] = 1;
            }else{
                tempLinhaMatriz[c] = 0;
            }
        }
        const linhaMatriz = tempLinhaMatriz.slice();
        matrizIdentidade.push(linhaMatriz);
    }
    return matrizIdentidade
}




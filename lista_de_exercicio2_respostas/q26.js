//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
const A = criarMatrizPreenchida(3,5)
const B = criarMatrizPreenchida(5,3)

imprimeMatriz(A);
imprimeMatriz(B);
imprimeMatriz(mutiplicarMatriz(A,B));

function imprimeMatriz(mat) {
    if (mat){
        for (const linha of mat) {
            console.log(...linha);
        }
        console.log();
    }
}

function mutiplicarMatriz(matrizUm,matrizDois){
    if (matrizUm[0].length == matrizDois.length){
        const matrizMulti = [];

        for (let linha = 0; linha < matrizUm.length ; linha++) {
            let temp = [];

            for (let coluna = 0; coluna < matrizDois[linha].length; coluna++) {

                for (let item = 0; item < matrizUm[linha].length; item++) {
                    if (item == 0) {
                        temp[coluna] = matrizUm[linha][item] * matrizDois[item][coluna]
                    }else{
                        temp[coluna] += matrizUm[linha][item] * matrizDois[item][coluna]
                    }
                }
            }
            matrizMulti.push(temp.slice());
        }
        return matrizMulti;
        
    } else{
        console.log("Fundamento da multiplição de matriz não satisfeito.")
    } 
}

function criarMatrizPreenchida(linha,coluna){

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
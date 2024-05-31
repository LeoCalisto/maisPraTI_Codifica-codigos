//31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
let l, c, quantidadeIguais = 0;
const A = 2, v = criarMatrizPreenchida(30,30), x = [], elementosUnicos = [];

//Separa os valores unicos da matriz v e conta os iguais
for (let j = 0; j<v.length; j++) {
    for (let i = 0; i < v[j].length; i++) {
        if ( v[j][i] == A) {
            quantidadeIguais++;
        }else{
            elementosUnicos.push(v[j][i])
        }
    }
}

//calcula linha e coluna da matriz que recebera os valores, baseado na maior quantidade de linha entre 30 e 10.
for (let i = 30; i >= 10; i--) {
    if (((v.length**2) - quantidadeIguais) % i == 0) {
        l = i;
        c = ((v.length**2) - quantidadeIguais) / i;
        break;
    }
}

//Preenche a nova matriz com os numeros unicos armazenados
let primIndLinha = 0;
for (let i = 0; i < l; i++) {
    let temp = [];
    for (let j = 0; j < c; j++) {
        temp.push(elementosUnicos[j+primIndLinha]);
    }
    primIndLinha += c;
    x.push(temp.slice());
}

console.log(`Matrix ${l} x ${c} contendo os números diferentes`);
for (const ln of x) {
    console.log(ln);
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
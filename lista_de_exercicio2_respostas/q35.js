//35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
const prompt = require('prompt-sync')();
const par = new Array(5),impar = new Array(5);
let posPar = 0,  posImpar = 0, qtPar = 0,  qtImpar = 0,valor;


for (let i = 0; i < 30; i++) {
    valor = parseInt(prompt(`Digite o valor ${i+1}: `));
    if(valor % 2 == 0){
        par[posPar] = valor;
        posPar++;
        qtPar++;
        if (posPar == 5) {
            posPar = 0;   
        }
        if (qtPar == 5) {
            console.log("Vetor par preenchido !!");
        }
    }else{
        impar[posImpar] = valor;
        posImpar++;
        qtImpar++;
        if (posImpar == 5) {
            posImpar = 0;   
        }
        if (qtImpar == 5) {
            console.log("Vetor par preenchido !!");
        }
    }
}
console.log("Pares: ");
console.log(par);
console.log("Impares: ");
console.log(impar);

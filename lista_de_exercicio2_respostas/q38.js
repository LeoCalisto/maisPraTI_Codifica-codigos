//38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync')();
const elementos = new Array(6);


console.log("Digite 6 números: ");
for (let i = 0; i < elementos.length; i++) {
    elementos[i] = prompt(`valor ${i+1}: `)
}

menu();
let escolha = parseInt(prompt("Insira a opção que deseja realziar: "));
switch (escolha) {
    case 1:
        soma(elementos);
        break;
    case 2:
        mult(elementos);
        break;
    case 3:
        med(elementos);
        break;
    case 4:
        ordenar(elementos);
        break;
    case 5:
        console.log(elementos)
        break;
    default:
        console.log("Opção não encontrada!");
        break;
}


function soma(vetor) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += vetor[i];
    }

    console.log("A soma dos elentos é: "+soma);
}

function mult(vetor) {

    let produto = vetor[0];
    for (let i=1 ; i<vetor.length ; i++) {
        produto *= vetor[i];
    }

    console.log("O produto dos elementos é: "+produto);
}

function med(vetor) {

    let media = 0;
    for (const valor of vetor) {
        media += valor;
    }

    media /= vetor.length;
    console.log("A média dos elementos é: "+media);
}

function ordenar(vetor) {

    vetor.sort();
    console.log("A ordenação crecente dos elementos é: "+vetor);
}

function menu(prompt) {

    console.log("1- soma dos elementos.");
    console.log("2- produto dos elementos.");
    console.log("3- média dos elementos.");
    console.log("4- ordene os elementos em ordem crescente.");
    console.log("5- mostre o vetor.");
}




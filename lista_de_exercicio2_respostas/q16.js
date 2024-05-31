//16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
let numeros = new Array(20);

preencherVetor(numeros);
console.log(numeros);
numeros = numeros.sort();
console.log(numeros);


function preencherVetor(vetor){
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * (100));
    }
}
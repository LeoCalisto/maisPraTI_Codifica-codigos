//15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
let numeros = [];

for (let i = 0; i<10; i++) {
  numeros[i] = parseInt(prompt(`Digite o numero ${i+1} : `));
}

for (const id in numeros) {
    if (numeros[id]%2==0) {
        console.log(`${numeros[id]} na posição ${id}`);
    }
}

//Imprime 10 temos e a soma de uma PA baseado no primeiro termo e rezão informados

const prompt = require('prompt-sync')();
let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
let razao = parseInt(prompt("Agora, informe a razão da PA: "));
let somaTermos=0;


console.log(`Os 10 termos da PA são: `)
pa(primeiroTermo,razao);
console.log(`A soma dos termos é ${somaTermos}`);

function pa(primeiroTermo,razao) {
    for(let i=0;i<10;i++){
        console.log(primeiroTermo + (i*razao));
        somaTermos += primeiroTermo + (i*razao);
    }
}

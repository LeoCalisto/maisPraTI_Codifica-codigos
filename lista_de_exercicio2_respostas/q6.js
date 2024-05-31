// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado. 
const prompt = require('prompt-sync')();
let numeroDigitado;
let numeroSorteado = Math.floor(Math.random() * (6) + 1);

console.log("O computador escolheu um número entre  1 e 5 ! Tente adivinhar...");
numeroDigitado = parseInt(prompt("Insira o valor: "));

console.log(numeroDigitado == numeroSorteado? "Acertou!": `Errou! Computador escolheu ${numeroSorteado}`);

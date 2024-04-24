//Percentualizador de votos
const prompt = require('prompt-sync')(); 

let eleitores = parseInt(prompt("Quantos eleitores tem na cidade? "));
let voto_branco = parseInt(prompt("Digite quanto vostos foram brancos:  "));
let voto_nulo = parseInt(prompt("Digite quantos votos foram nulos: "));
let voto_valido = parseInt(prompt("Digite quanto votos foram válidos: "));

console.log((voto_branco/eleitores*100).toFixed(2) + "% de votos brancos.");
console.log((voto_nulo/eleitores*100).toFixed(2) + "% de votos nulos.");
console.log((voto_valido/eleitores*100).toFixed(2) + "% de votos válidos.");

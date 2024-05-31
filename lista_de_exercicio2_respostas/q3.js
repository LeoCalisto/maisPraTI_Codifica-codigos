//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
const prompt = require('prompt-sync')();
let distanciaViagem = parseInt(prompt("Qual a distancia da viagem que pretende fazer? "));
let custoViagem;

if (distanciaViagem<=200){
    custoViagem = distanciaViagem*0.5;
}else{
    custoViagem = distanciaViagem*0.45;    
}
console.log(`o custo da viagem da viagem de ${distanciaViagem} KM é R$${custoViagem},00`);
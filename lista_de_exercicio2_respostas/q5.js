//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
const prompt = require('prompt-sync')();
const opcoes = ["PEDRA", "PAPEL", "TESOURA"];
//Utilizado multiplacação por 3,9 no random e aredondando para baixo para possibilitar uma melhor chance de cair o número 3, caso usar apenas 3 a ocorrência do próprio número é quase 0.
let escolhaComputador = opcoes[Math.floor(Math.random() * (3.9))];
let escolhaJogador = parseInt(prompt("Qual é sua escolha ? (0-PEDRA 1-PAPEL 2-TESOURA)"));

if (escolhaComputador == opcoes[escolhaJogador]){
    console.log(`Empate, ambos escolheram ${escolhaComputador}`);
}else{
    switch (escolhaJogador) {
        case 0:
            if (escolhaComputador == "PAPEL"){
                console.log(`o Jogador perdeu!! computador escolheu ${escolhaComputador}`);
            }else{
                console.log(`o Jogador ganhou!! computador escolheu ${escolhaComputador}`);
            }
            break;
        case 1:
            if (escolhaComputador == "TESOURA"){
                console.log(`o Jogador perdeu!! computador escolheu ${escolhaComputador}`);
            }else{
                console.log(`o Jogador ganhou!! computador escolheu ${escolhaComputador}`);
            }
            break;
        case 2:
            if (escolhaComputador == "PEDRA"){
                console.log(`o Jogador perdeu!! computador escolheu ${escolhaComputador}`);
            }else{
                console.log(`o Jogador ganhou!! computador escolheu ${escolhaComputador}`);
            }
            break;
        default:
            console.log("opção não existente !");
    }
}

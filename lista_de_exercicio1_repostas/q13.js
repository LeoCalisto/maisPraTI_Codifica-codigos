

const prompt = require('prompt-sync')();


for (rodada = 1; rodada<=5;rodada++){
    let numero = prompt("Digite o nuemro desejado: ")
    for(x=1; x<=numero;x++){
        console.log(`${x} x ${numero} = ${x*numero}`);
    }

}
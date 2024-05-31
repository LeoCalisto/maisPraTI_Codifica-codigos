//12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
function nTermosDeFibo(quantidadeTermos){
    let x = 0, y = 1, z;
    for (let i = 1; i <= quantidadeTermos; i++) {

        console.log(y);
        z = x + y;
        x = y;
        y = z;
    }
}

nTermosDeFibo(10);
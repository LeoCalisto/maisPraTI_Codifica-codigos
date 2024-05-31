// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
function nTermosDeFibo(quantidadeTermos){
    let temporaria= 0;
    const fibo = [];
    fibo[0] = 1;

    for (let i = 1; i < quantidadeTermos; i++) {
        fibo[i] = temporaria + fibo[i-1];
        temporaria = fibo[i-1];
    }
    return fibo;
}


console.log(nTermosDeFibo(15));


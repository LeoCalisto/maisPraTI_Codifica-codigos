//Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 100 },
    { tipo: 'saida', valor: 50 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saida', valor: 30 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;

    } else if (transacao.tipo === 'saida') {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
//49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
const categorias = [];
const transacoes = [
    { id: 1, valor: 200.50, data: "21/02/2023", categoria: "saque" },
    { id: 2, valor: 150.00, data: "28/04/2024", categoria: "saque" },
    { id: 3, valor: 2170.30, data: "05/03/2024", categoria: "deposito" },
    { id: 4, valor: 510.10, data: "14/05/2022", categoria: "transfEnviada" },
    { id: 5, valor: 100.20, data: "12/09/2023", categoria: "transfRecebida" },
    { id: 6, valor: 30.00, data: "30/03/2024", categoria: "transfEnviada" },
    { id: 7, valor: 172.00, data: "08/04/2024", categoria: "transfRecebida" },
    { id: 8, valor: 207.00, data: "01/01/2024", categoria: "deposito" }
];

//Separando categorias existente
for (let i = 0; i < transacoes.length; i++) {

    let match = 0;
    for (let x = 0; x < i; x++) {
        if (transacoes[i].categoria == categorias[x]) {
            match++;
        }
    }

    if (!match) {
        categorias.push(transacoes[i].categoria);
    }
}

imprimeObjetoDeCategoria(transacoes, categorias);

function imprimeObjetoDeCategoria(transacoes, categorias) {

    const obj = {}
    for (const cat of categorias) {
        const transfMesmaCat = [];
        let somaValorTransacao = 0;
        for (const transacao of transacoes) {
            if (cat == transacao.categoria) {
                transfMesmaCat.push(transacao);
                if (cat == "saque" || cat == "transfEnviada") {
                    somaValorTransacao -= transacao.valor;
                } else {
                    somaValorTransacao += transacao.valor;
                }
            }
        }
        obj[cat] = transfMesmaCat;
        obj["valores" + cat] = somaValorTransacao;

    }
    console.log(obj);
}

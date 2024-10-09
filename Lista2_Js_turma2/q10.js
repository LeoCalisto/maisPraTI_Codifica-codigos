// Crie um array de objetos vendas, onde cada objeto tem produto quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
    { produto: 'Produto X', quantidade: 2, valor: 50 },
    { produto: 'Produto Y', quantidade: 1, valor: 100 },
    { produto: 'Produto Z', quantidade: 3, valor: 30 }
];

let valorTotal = 0;

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor; 
});

console.log(`Valor total de vendas: R$ ${valorTotal.toFixed(2)}`);
// Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'Alice', produto: 'Produto A', quantidade: 2 },
    { cliente: 'Bruno', produto: 'Produto B', quantidade: 1 },
    { cliente: 'Alice', produto: 'Produto C', quantidade: 3 },
    { cliente: 'Carlos', produto: 'Produto A', quantidade: 1 },
    { cliente: 'Bruno', produto: 'Produto C', quantidade: 2 }
];

const resumoPedidos = {};

pedidos.forEach(pedido => {
    if (!resumoPedidos[pedido.cliente]) {
        resumoPedidos[pedido.cliente] = 0;
    }

    resumoPedidos[pedido.cliente] += pedido.quantidade;
});

console.log(resumoPedidos);
//Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: 'Produto A', quantidade: 2, precoUnitario: 50 },
        { nome: 'Produto B', quantidade: 1, precoUnitario: 100 },
        { nome: 'Produto C', quantidade: 3, precoUnitario: 30 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario; 
});

console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);
// Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Produto A', quantidade: 5, minimo: 10 },
    { produto: 'Produto B', quantidade: 2, minimo: 5 },
    { produto: 'Produto C', quantidade: 15, minimo: 20 },
    { produto: 'Produto D', quantidade: 7, minimo: 8 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2; 
    }
});

console.log(estoque);
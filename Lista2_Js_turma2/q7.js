// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.


const produtos = [
    { nome: 'Produto 1', preco: 100, desconto: 0 },
    { nome: 'Produto 2', preco: 200, desconto: 0 },
    { nome: 'Produto 3', preco: 300, desconto: 0 }
];

produtos.forEach(produto => {
    const desconto = produto.preco * 0.10; 
    const novoPreco = produto.preco - desconto;
    console.log(`Novo preço de ${produto.nome}: R$ ${novoPreco.toFixed(2)}`);
});
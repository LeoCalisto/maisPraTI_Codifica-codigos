//46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
const vendas = [], relatorioVendas = {};

registrarVenda("Marcos", 1500, vendas);
registrarVenda("Sheila", 5000, vendas);
registrarVenda("Carlos", 1500, vendas);
registrarVenda("Marcos", 1500, vendas);
registrarVenda("Sheila", 350, vendas);
registrarVenda("Sheila", 2000, vendas);

for (const venda of vendas) {
    if (relatorioVendas[venda.vendedor]) {
        relatorioVendas[venda.vendedor] += 1;
    }else{
        relatorioVendas[venda.vendedor] = 1;
    }
}

console.log(relatorioVendas);

function registrarVenda(nome, valorVenda,vetor) {
    vendas.push({
    vendedor: nome,
    valor: valorVenda
    });
} 


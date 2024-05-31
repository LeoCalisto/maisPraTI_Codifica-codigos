//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
const inventarioLojaA = {
    martelo: 45,
    parafuso: 16,
    chaveFenda: 11,
    escada: 3,
    conectorFio: 1
};
const inventarioLojaB = {
    martelo: 45,
    parafuso: 16,
    cimento: 6
};

const InventarioGeral = unificadorEstoque(inventarioLojaA, inventarioLojaB);

console.log(estoqueGeral);

function unificadorEstoque(estoqueA, estoqueB) {

    const estoqueGeral = {};
    for (const i in estoqueA) {
        estoqueGeral[i] = estoqueA[i];
    }

    for (const j in estoqueB) {
        if (estoqueGeral[j]) {
            estoqueGeral[j] += inventarioLojaB[j]
        } else {
            estoqueGeral[j] = inventarioLojaB[j]
        }
    }

    return estoqueGeral;
}

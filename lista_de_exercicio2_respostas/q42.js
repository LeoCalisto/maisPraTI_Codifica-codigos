//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
const dados = {
    titulo:"lista de inadinplentes",
    ano: 2013,
    nomes: ["Maicon", "Luana", "Joaquin", "Marcos"],
    descontosPossiveis:[2.5, 20.4, 90.7]
}

retornarObj(dados);

function retornarObj(dados){
    
    const novoObj = {};
    for (const key in dados) {
        if (typeof(dados[key]) == 'object') {
           novoObj[key] = dados[key];
        }
    }
    console.log(novoObj);
}
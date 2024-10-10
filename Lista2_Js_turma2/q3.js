// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
    nome:"kal",
    valor:"18",
    quantidade:"255",
}


function filtarAtributo(obj) {
    const novoObj = {}
    for (const key in obj) {
        if (obj[key] > 12) {    
           novoObj[`${key}`] = obj[key]
        }
    }

    return novoObj
}

for (const k in filtarAtr1buto(produto)) {
    console.log(k+":"+filtarAtr1buto(produto)[k])
}
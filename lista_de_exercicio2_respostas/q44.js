//44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
const animal = {
    nome: "Xablau",
    raca: "Labrador",
    classificacao: "mamífero",
    tipo: "cachorro",
    idade: 2,
    late: function () {
        console.log("Au au");
    }
}

contarAtributoString = function(obj) {
    let atrString = 0;
    for (const key in obj) {
        if (typeof(obj[key]) == 'string') {
            atrString++;
        }
    }
    return atrString;
}

console.log(`O objeto possui ${contarAtributoString(animal)} atributos string`);
//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.

const cachorro = {
    nome: "Xablau",
    raca: "Labrador",
    late: function () {
        console.log("Au au");
    },
    cor:"Marron",
    sexo:"Macho"
}

const gato = {
    nome: "Xani",
    raca: "Sphynx",
    mia: function () {
        console.log("miau miau");
    },
    sexo:"Fêmea"
}

console.log(mesclarObj(cachorro, gato));

function mesclarObj(obj1, obj2) {

    const novoObj = {};
    for (const c in obj1) {
        novoObj[c] = obj1[c];
    }

    for (const i in obj2) {
        novoObj[i] = obj2[i];
    }
    
    return novoObj;
}
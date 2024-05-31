//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
const obj = {}, vetor = ["nome", "nome", "idade", "cor", "idade", "idade", "idade"];

for (const titulo of vetor) {
    if (obj[titulo]) {
        obj[titulo] += 1; 
    }else{
        obj[titulo] = 1;
    }    
}

console.log(obj);
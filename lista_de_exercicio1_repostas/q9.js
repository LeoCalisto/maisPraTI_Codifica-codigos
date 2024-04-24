//imprime nome da região baseado num range de index
const prompt = require('prompt-sync')();

let regiao;
let codigo = parseInt(prompt("Digite o codigo do produto: "));

switch (codigo){
    case 1:
        regiao = "SUL"
        break;
    case 2:
        regiao = "NORTE"
        break;
    case 3 :
        regiao = "LESTE"
        break;
    case 4:
        regiao = "OESTE"
        break;
    default:
        if (codigo == 4 || codigo == 5){
            regiao = "NORDESTE";
        }else if (codigo >= 7 && codigo <= 9){
            regiao = "SULDESTE";
        }else if(codigo >= 10 && codigo <=20 ){
            regiao = "CENTRO-OESTE"
        }else if (codigo >=25 && codigo <=50){
            regiao = "NOROESTE";
        }else{
            regiao = "Produto importado"
        }
        break;
}
console.log(regiao);


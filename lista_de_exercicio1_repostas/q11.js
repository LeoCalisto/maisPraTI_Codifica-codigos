const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

while(numero > 0){
    
    if(numero % 2 == 0){
        console.log("PAR")
    }else{
        console.log("IMPAR")
    }
    
    numero = parseInt(prompt("Digite um número: "));
}
const prompt = require('prompt-sync')();

let quantidadePrimo = 0;
let dividendo = 101;
let divisor = 2;

while(quantidadePrimo!=50){
    while(dividendo % (divisor) != 0 ){
        divisor++;
        if(divisor == dividendo){
            quantidadePrimo++;
            console.log(dividendo);
        }
    }
    dividendo +=1 ;
    divisor = 2;
}
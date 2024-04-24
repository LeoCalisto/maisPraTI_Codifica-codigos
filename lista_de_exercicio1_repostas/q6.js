const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Digite o primeiro lado"));
let ladoB = Number(prompt("Digite o Segundo lado"));
let ladoC = Number(prompt("Digite o Terceiro lado"));

if (ladoA < ladoB + ladoC && ladoB < ladoC + ladoA && ladoC < ladoA + ladoB){
    if (ladoA == ladoB && ladoB == ladoC){
        console.log("É um triangulo equilatero")
    }else if (ladoA != ladoB && ladoB !=ladoC && ladoC != ladoA){
        console.log("É triangulo escaleno");
    }else{
        console.log("É triangulo isórceles");
    }

}else{
    console.log("NÃO é um triangulo!")
}
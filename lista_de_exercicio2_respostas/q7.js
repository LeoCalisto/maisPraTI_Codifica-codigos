// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, 
// mostre o preço a ser pago de acordo com os dados a seguir: 
// Carros populares 
// - Até 100 Km percorridos: R$ 0,20 por Km 
// - Acima de 100 Km percorridos: R$ 0,10 por Km 
// Carros de luxo 
// - Até 200 Km percorridos: R$ 0,30 por Km 
// - Acima de 200 Km percorridos: R$ 0,25 por Km
const prompt = require('prompt-sync')();
let tipoCarro, kmPercorrido, diasAlugado, custo;

tipoCarro = parseInt(prompt("Digite o número que corresponde ao tipo de carro que deseja alugar (1-Popular 2-luxo) ? "));
kmPercorrido = parseFloat(prompt("Quantos Km foram percorridos? "));
diasAlugado = parseInt(prompt("Quantos dias de aluguel do ccarro? "));
switch (tipoCarro) {
    case 1:
        if(kmPercorrido <= 100){
            custo = (0.2*kmPercorrido)+(90*diasAlugado);
        }else{
            custo = (0.1*kmPercorrido)+(90*diasAlugado);
        }
        break;
    case 2:
        if(kmPercorrido <= 200){
            custo = (0.3*kmPercorrido)+(150*diasAlugado);
        }else{
            custo = (0.25*kmPercorrido)+(150*diasAlugado);
        }
        break;
    default:
        console.log("Tipo de carro não encontrado!");
}

if (custo != undefined){
    console.log("O custo total para a configuração de aluguel digitada é " + custo);
}

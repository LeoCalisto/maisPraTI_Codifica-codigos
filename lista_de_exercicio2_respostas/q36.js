3//6. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
const prompt = require('prompt-sync')();
const gabarito = new Array(13), apostadores = new Array(100), resultados = new Array(100);

for (let n = 0; n < gabarito.length; n++) {
    
    //Ao inserir número repetido, o sistema pegunta novamente
    let repetido;
    do {
        gabarito[n] = parseInt(prompt(`Digite o valor ${n} do gabarito: `));

        for (let i = 0; i < n; i++) {
            if (gabarito[n] == gabarito[i]) {
                repetido = true;
                break;
            }else{
                repetido = false;
            }
        }
    
    } while (repetido);
}
console.log();

for (let i = 0; i < apostadores.length; i++) {
    let acertos = 0;
    let repetido;
    const objetoApostador = {};
    do {
        objetoApostador.cartao = parseInt(prompt("Insira o número do seu cartao: "))
        
        for (let j = 0; j < i; j++) {
            if (bilheteResposta[i] == bilheteResposta[j]) {
                repetido = true;
                break;
            }else{
                repetido = false;
            }
        }
        
    } while (repetido);
    console.log();
    
    const bilheteResposta = new Array(13);
    for (let x = 0; x < bilheteResposta.length; x++) {

        //Ao inserir número repetido, o sistema pegunta novamente
        let repetido;
        do {
            bilheteResposta[x] = parseInt(prompt(`Apostador ${objetoApostador.cartao} insira o digito ${x} da resposta: `));

            for (let i = 0; i < x; i++) {
                if (bilheteResposta[x] == bilheteResposta[i]) {
                    repetido = true;
                    break;
                }else{
                    repetido = false;
                }
            }
            
            
        } while (repetido);

        for (let j = 0; j < gabarito.length; j++) {
            if (bilheteResposta[x] == gabarito[j]) {
                acertos++;
            }
        }
    }
    console.log();

    apostadores[i] = objetoApostador;
    resultados[i] = acertos;
    objetoApostador.bilhete = bilheteResposta;
    console.log(objetoApostador.bilhete);
    console.log(`O jogador ${objetoApostador.cartao} acertou ${resultados[i]}.`);
    if (resultados[i] == 13) {
        console.log("Parabéns, tu foi GANHADOR")
    }
}

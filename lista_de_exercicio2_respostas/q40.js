//40.Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiroscada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
const prompt = require('prompt-sync')();
const premio = new Array(5), apostadores = new Array(50);

for (let n = 0; n < premio.length; n++) {

    //Ao inserir número repetido, o sistema pegunta novamente
    let repetido;
    do {

        premio[n] = parseInt(prompt(`Digite o numero ${n} dos números premiados: `));

        for (let i = 0; i < n; i++) {
            if (premio[n] == premio[i]) {
                repetido = true;
                break;
            } else {
                repetido = false;
            }
        }

    } while (repetido);
}
console.log();


for (let i = 0; i < apostadores.length; i++) {

    let acertos = 0;
    const bilheteResposta = new Array(5);
    for (let x = 0; x < bilheteResposta.length; x++) {

        //Ao inserir número repetido, o sistema pegunta novamente
        let repetido;
        do {

            bilheteResposta[x] = parseInt(prompt(`Apostador ${i} insira o digito ${x} da resposta: `));

            for (let i = 0; i < x; i++) {
                if (bilheteResposta[x] == bilheteResposta[i]) {
                    repetido = true;
                    break;
                } else {
                    repetido = false;
                }
            }

        } while (repetido);

        for (let j = 0; j < premio.length; j++) {
            if (bilheteResposta[x] == premio[j]) {
                acertos++;
            }
        }
    }

    if (acertos == 5) {
        console.log("GANHADOR\n")
    }
}

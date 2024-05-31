const prompt = require('prompt-sync')();
const hoteis = [], reservas = [];

menu();
let esc = parseInt(prompt());

while (esc != 6) {
    switch (esc) {
        case 1:
            adicionarHotel(hoteis);
            break;
        case 2:
            listarHoteisCidade(hoteis, funcFormatarImpressao);
            break;
        case 3:
            realizarRezerva(hoteis,reservas)
            break;
        case 4:
            cancelarReserva(reservas, funcFormatarImpressao);
            break;
        case 5:
            listarReservas(reservas,hoteis, funcFormatarImpressao);
            break;
        default:
            console.log("Opção dogotada não existe!");
    }
    menu();
    esc = parseInt(prompt());
}   



function menu() {
    console.log();
    console.log("1 - Adicionar hotel");
    console.log("2 - Buscar hotel(cidade)");
    console.log("3 - Fazer reservas");
    console.log("4 - Cancelar reserva");
    console.log("5 - Listar reserva");
    console.log("6 - Encerrar");
}


function adicionarHotel(hoteis) {

    console.log();
    if (hoteis.length > 0) {

        let nomeHotel = prompt("Digite o nome do hotel: ");
        let hotelExiste = false;
        for (const hotel of hoteis) {

            if (nomeHotel.toUpperCase() == hotel.nomeHotel.toUpperCase()) {

                console.log(hotel);
                let resp = prompt("Correponde ao Hotel listado acima? ");
                while (resp != "S" && resp != "N") {
                    let resp = prompt("confirmar reserva s/n ? ");
                }
                if (resp.toUpperCase() == "N") {
                    hotelExiste = false;
                } else {
                    hotelExiste = true;
                    console.log("\nHotel já cadastrado!");
                    break;
                }
            } 
    
            if (!hotelExiste) {
    
                let cidade = prompt("Digite a cidade de funcionamento do hotel: ");
                let quartoTotais = parseInt(prompt("Digite quantos quartos exitem ao total: "));
                let quartosDisponiveis = parseInt(prompt("Digite quantos desses quartos estão disponiveis: "));
                let id = hoteis[hoteis.length - 1].idHotel + 1;
                hoteis.push({ idHotel: id, nomeHotel: nomeHotel, cidade: cidade, quartoTotais: quartoTotais, quartosDisponiveis: quartosDisponiveis });
                console.log("\nHotel cadastrado com sucesso!!");
                break;
            }
            
        }

    }else{

        let nomeHotel = prompt("Digite o nome do hotel: ");
        let cidade = prompt("Digite a cidade de funcionamento do hotel: ");
        let quartoTotais = parseInt(prompt("Digite quantos quartos exitem ao total: "));
        let quartosDisponiveis = parseInt(prompt("Digite quantos desses quartos estão disponiveis: "));
        hoteis.push({ idHotel: 1, nomeHotel: nomeHotel, cidade: cidade, quartoTotais: quartoTotais, quartosDisponiveis: quartosDisponiveis });
        console.log("\nHotél cadastrado com sucesso!!");
    }  
}


function listarHoteisCidade(hoteis, funcFormatarImpressao) {

    console.log();
    if (hoteis.length > 0) {

        let cidade = prompt("Digite a cidade da busca por hoteis: ")
        for (const hotel of hoteis) {
            if (hotel.cidade.toUpperCase() == cidade.toUpperCase()) {
                funcFormatarImpressao(hotel);
            }
        }

    }else{
        console.log("\nNenhum Hotel cadastrado !");
    }
}


function realizarRezerva(hoteis,reservas) {

    if (hoteis.length > 0) {

        let hotelListado;
        const hoteisVagos = [];
        console.log();
        let nomeCliente = prompt("Por favor, informe seu nome: ");
        for (const hotel of hoteis) {
    
            if (hotel.quartosDisponiveis >= 1) {
                console.log(`Id: ${hotel.idHotel}`);
                console.log(`Nome: ${hotel.nomeHotel}`);
                console.log(`Cidade: ${hotel.cidade}`);
                console.log(`Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
                console.log();
            }
            hoteisVagos.push(hotel);
        }
        
        console.log();
        let escolha = parseInt(prompt("Digite o ID do hotel de interesse: "));
        console.log();
        
        for (const hotel of hoteisVagos) {
            if (escolha == hotel.idHotel) {
                hotelListado = true;
                console.log(`Id: ${hotel.idHotel}`);
                console.log(`Nome: ${hotel.nomeHotel}`);
                console.log(`Cidade: ${hotel.cidade}`);
                console.log(`Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
                console.log();
                let confirmarReserva = prompt("confirmar reserva s/n ? ").charAt(0).toUpperCase();
                while (confirmarReserva != "S" && confirmarReserva != "N") {
                    let confirmarReserva = prompt("confirmar reserva s/n ? ");
                }
    
                if (confirmarReserva.toUpperCase() == "S") {
                    hotel.quartosDisponiveis -= 1;
                    let idUtimaReserva = reservas.length > 0 ? reservas(reservas.length-1).idReserva : 0;
                    reservas.push({idReserva:idUtimaReserva+1,idHotel:hotel.idHotel,nomeCliente:nomeCliente})
                    console.log("Reserva realizada ! Volte sempre.");
                }else{
                    console.log("\nProcesso de reserva cancelado !");
                }
            }
        }
    
        if (!hotelListado) {
            console.log("\nId inserido não está entre os listados !");
        }     

    }else{
        console.log("Não ha hoteis cadastrados no sistema !");
    }
    
}


function funcFormatarImpressao(obj) {
    console.log();
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}


function listarReservas(reservas,hoteis, funcFormatarImpressao) {
    console.log();
    if (reservas.length > 0) {

        for (const reserva of reservas) {
            console.log(reserva);
            console.log("\nNo hotel: ");

            for (const hotel of hoteis) {
                if (reserva.idHotel == hotel.idHotel) {
                    funcFormatarImpressao(hotel);
                }
            }
        }

    }else{
        console.log("\nNão há reservas no registro !");
    }
}


function cancelarReserva(reservas, funcFormatarImpressao) {
    console.log();
    if (reservas.length > 0) {

        let idExiste = false;
        let codReserva = parseInt(prompt("Digite o ID da reserva: "));

        for (const reserva of reservas) {
            if (reserva.idReserva == codReserva) {
                idExiste = true;
                funcFormatarImpressao(reserva);
                let confirmar = prompt("Confirmar cancelamento da reserva S/N ? ").charAt(0).toUpperCase();
                while (confirmar != "S" && confirmar != "N") {
                    let confirmar = prompt("confirmar reserva s/n ? ");
                }

                if (confirmar == 'S') {
                    let indiceReserva = reservas.indexOf(reserva);
                    reservas.splice(indiceReserva,1);
                    for (const hotel of hoteis) {
                        if (hotel.idHotel == reserva.idHotel) {
                            hotel.quartosDisponiveis++;
                            break;
                        }
                    }
                    break;
                }
            }
        }
        console.log(reservas);

        if (!idExiste) {
            console.log("\nID não correponde a uma reserva");
        }

    } else{
        console.log("\nNão há reservas registradas");
    }
}
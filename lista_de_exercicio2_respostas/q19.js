//19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
const prompt = require('prompt-sync')();
const horarios = [];

for (let i = 0; i < 5; i++) {
    
    let horas = parseInt(prompt(`${i+1} - `+"Digite a hora do relógio (usar 2 digitos 00 - 24): "));
    while (horas < 0 || horas > 24){
        horas = parseInt(prompt(`${i+1} - `+"Digite a hora do relógio (usar 2 digitos 00 - 24): "));
    }

    let minutos = prompt(`${i+1} - `+"Digite a minutos do relógio (usar 2 digitos 00 - 59): ");
    while (horas < 0 || horas > 24){
        minutos = parseInt(prompt(`${i+1} - `+"Digite os minutos do relógio (usar 2 digitos 00 - 59): "));
    }

    let segundos = prompt(`${i+1} - `+"Digite a segundos do relógio (usar 2 digitos 00 - 59): ");
    while (segundos < 0 || segundos > 59){
        segundos = parseInt(prompt(`${i+1} - `+"Digite os segundos do relógio (usar 2 digitos 00 - 59): "));
    }

    horarios.push({horas:horas, minutos:minutos, segundos:segundos});
}

console.log("Os horarios armazenados foram: ");
for (const horario of horarios) {
    console.log(`${horario.horas}.${horario.minutos}.${horario.segundos}`);
}
const prompt = require('prompt-sync')(); 


//Conversor de temperatura C para F
let celcius = Number(prompt("Digite a temperatura em Celsius: "));

let fahreheit = celcius*1.8 + 32;

console.log(`A temperatura ${celcius}°C corresponde a ${fahreheit}°F`) 






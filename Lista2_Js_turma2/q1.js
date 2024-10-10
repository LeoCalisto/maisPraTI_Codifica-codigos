// Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
    marca:"Honda",
    cor:"Branco",
    ano:"2024",
    modelo:"Civic"
}

for (const key in carro) {
    console.log(key+":"+carro[key]);
}
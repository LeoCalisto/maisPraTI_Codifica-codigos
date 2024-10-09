// Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
    { nome: 'Alice', idade: 28, cidade: 'São Paulo' },
    { nome: 'Bruno', idade: 35, cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 42, cidade: 'Belo Horizonte' },
    { nome: 'Diana', idade: 25, cidade: 'Curitiba' },
    { nome: 'Eduardo', idade: 31, cidade: 'Fortaleza' }
];

let contador = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contador}`);
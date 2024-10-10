// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
    {
        nome:"Carla",
        idade:15,
        cidade:"Brasilia"

    },
    {
        nome:"Pedro",
        idade:19,
        cidade:"Salvador"
    },
    {
        nome:"Caio",
        idade:24,
        cidade:"Santos"
    }
]

for (const pessoa of pessoas) {
    console.log(pessoa);
}
// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let existe = false;
const livro = {
    titulo:"O livro teste",
    autor:"Eu mesmo",
    anoPublicacao:"2024",
    genero:"ficção"
}

for (const key in livro) {
    if (key == "editora") {
        existe = true;
    }
}
if (!existe) {
    livro.editora = "my pc"
}

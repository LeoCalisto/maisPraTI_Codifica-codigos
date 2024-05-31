//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
console.log(calcularPesoIdeal(2.00,"m"));


function calcularPesoIdeal(alt,sexo){
    let pesoIdeal;
    if(sexo == "f"){
        pesoIdeal = (72.7*alt)-58;
    }else{
        pesoIdeal = (62.1*alt)-44.7;
    }
    return pesoIdeal;
}
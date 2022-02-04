// DESAFIO: Calcular a média das seguintes notas, usando o forEach : [10, 6.5, 8, 7.5]

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// callback (ou seja, uma função que chama outra função)
 
/* Utilizando arrow-function:

notas.forEach(nota => {
        somaDasNotas += nota
    }) */

notas.forEach(function(nota){  // Para cada nota de um array de notas, executar a função somaDasNotas
    somaDasNotas += nota // O método forEach automaticamente faz o loop na array "notas" sem precisar passar a notação de colchetes do array - como foi o caso do desafio anterior
})


    let media = somaDasNotas/notas.length

console.log(`A média de notas calculadas foi de ${media}`)
// DESAFIO: Calcular a média das seguintes comissoes, usando o forEach : [10000, 50000, 70000, 90000]

const comissoes = [10000, 50000, 70000, 90000]

let somaDasComissoes = 0

// callback (ou seja, uma função que chama outra função)
 
/* Utilizando arrow-function:

notas.forEach(comissao => {
        somaDasComissoes += comissao
    }) */

comissoes.forEach(function(comissao){  // Para cada comissao de um array de comissoes, executar a função somaDasComissoes
    somaDasComissoes += comissao // O método forEach automaticamente faz o loop na array "comissoes" sem precisar passar a notação de colchetes do array - como foi o caso do desafio anterior
})

    let media = somaDasComissoes/comissoes.length

console.log(`A média de comissões calculadas foi de R$ ${media}`)
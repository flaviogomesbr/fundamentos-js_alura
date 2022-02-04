// DESAFIO: Calcular a média das seguintes comissões, usando o for : [10, 6.5, 8, 7.5]

const comissoes = [10000, 50000, 70000, 90000]

let somaDasComissoes = 0  // variável somaDasNotas precisa estar fora do bloco do "for". O valor zero é onde inicia e é um valor padrão para não interferir na média

for (let i = 0; i < comissoes.length; i++){
    somaDasComissoes += comissoes[i] // operador "+=" soma o valor da direita com a variável que está à esquerda. Poderia ser substituído por somaDasNotas = somaDasNotas + "um valor"
}

let media = somaDasComissoes /comissoes.length

console.log(`A média de comissão calculada foi de R$ ${media}`)
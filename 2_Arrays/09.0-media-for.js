// DESAFIO: Calcular a média das seguintes notas, usando o for : [10, 6.5, 8, 7.5]

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0  // variável somaDasNotas precisa estar fora do bloco do "for". O valor zero é onde inicia e é um valor padrão para não interferir na média

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i] // operador "+=" soma o valor da direita com a variável que está à esquerda. Poderia ser substituído por somaDasNotas = somaDasNotas + "um valor"
}

let media = somaDasNotas/notas.length

console.log(`A média de nota calculada foi de ${media}`)
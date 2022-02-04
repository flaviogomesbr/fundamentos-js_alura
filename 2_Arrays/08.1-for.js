// DESAFIO: Imprima o índice e a lista com os seguintes carros: 'Hilux', 'Etron', 'Maverick', 'Opala'

const carros = ['Hilux', 'Etron', 'Maverick', 'Opala'] // array de índice 3 com 4 elementos

for (let i = 0; i < carros.length; i++) { // contador "i" inicia no 0 e para "i" menor que tamanho do índice, incrementa o próximo "i" até atingir o tamanho do índice

    console.log(i, carros[i]) // (i, carros[i]): o primeiro valor a ser passado é o "i" e o segundo é o valor dentro da array
}
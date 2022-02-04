// DESAFIO: Imprima o índice e a lista com os seguintes números: 100, 200, 300, 400, 500, 600

const numeros = [100, 200, 300, 400, 500, 600] // array de índice 5 com 6 elementos

for (let i = 0; i < numeros.length; i++) { // contador "i" inicia no 0 e para "i" menor que tamanho do índice, incrementa o próximo "i" até atingir o tamanho do índice

    console.log(i, numeros[i]) // (i, numeros[i]): o primeiro valor a ser passado é o "i" e o segundo é o valor dentro da array
}
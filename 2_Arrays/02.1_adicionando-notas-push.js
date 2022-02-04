const notas = [10, 6, 8] // lançar a nota 7 que foi esquecida pelo professor

notas.push(7) // a nota está sendo enviada aqui através do push
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)
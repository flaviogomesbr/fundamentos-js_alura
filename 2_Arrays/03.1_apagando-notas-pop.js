const notas = [10, 7, 8, 5, 4] // apagar a última nota lançada acidentalmente (10)
notas.pop() // removerá a última nota (pop apaga o último elemento)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(`A média é ${media}`)
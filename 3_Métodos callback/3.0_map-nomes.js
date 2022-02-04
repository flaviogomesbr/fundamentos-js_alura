// DESAFIO: Padronizando os nomes. Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas: ['ana Julia', 'Caio vinicius', 'BIA silva']

let nomes = ["ana julia", "Caio vinicius", "BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)
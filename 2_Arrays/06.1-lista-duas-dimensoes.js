// DESAFIO: Pegar o nome e a nota do 3° aluno da lista (Caio, nota 9)

                // 0
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

// let listaDeAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]

                            // 0     // 1   
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

            // índice alunos = [0] e listaDeNotasEAlunos = [2], sua média é mediasDosAlunos = [1] de índice alunos = [2]
console.log(`${listaDeNotasEAlunos[0][2]}, sua média é ${listaDeNotasEAlunos[1][2]}`)
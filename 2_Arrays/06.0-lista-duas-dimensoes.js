// DESAFIO: Pegar o nome e a nota do 1° aluno da lista

                // 0
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

// let listaDeAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]

                            // 0     // 1   
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

            // índice alunos = [0] e listaDeNotasEAlunos = [0], sua média é mediasDosAlunos = [1] de índice alunos = [0]
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)
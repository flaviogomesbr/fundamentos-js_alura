// DESAFIO: Dado um nome de aluno, encontrar a média em uma lista de arrays

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
                            //3
const mediasDosAlunos = [10,7,9,6]

// includes faz uma busca verdadeiro ou falso (booleano) pelo tipo de dado. Ou seja, está indo no array[0] const alunos e verificando se existe o nome lançado no console.log. Se for verdadeiro, entra no if

// indexOf procura o número do índice compatível com o nome lançado no console.log. 

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {    // onde tiver o parâmetro "nomeDoAluno" será substituído pelo nome lançado no console.log
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { 
        let indice = listaDeNotasEAlunos[0].indexOf
        (nomeDoAluno)
                                // [0][3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]    
    }
    else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Caio"))
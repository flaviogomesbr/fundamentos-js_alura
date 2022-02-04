// DESAFIO: Dividir a turma em duas salas em número igual de pessoas

                // 0     // 1        // (...) até o 20
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log("tamanho da array:", nomes.length)

                        // pega do índice 0 ao 9 (primeira metade). O primeiro número é o índice de onde inicia
const sala1 = nomes.slice(0,nomes.length/2)

                        // pega do 10 em diante
const sala2 = nomes.slice(nomes.length/2)

console.log(`Aluno da sala 1: ${sala1}`)
console.log(`Aluno da sala 2: ${sala2}`)


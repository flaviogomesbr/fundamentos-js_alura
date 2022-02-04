// DESAFIO: Dividir a turma em três salas em número igual de pessoas

                // 0     // 1        // (...) até o 21
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'Jesus']

console.log("tamanho da array:", nomes.length)

                        // pega do índice 0 ao 7 (primeiro terço, exceto o 7). 0 => zero é onde inicia e 7 => é onde termina (não incluso)
const sala1 = nomes.slice(0,7)

                        // pega do 7 ao 13 (exceto o 13)
const sala2 = nomes.slice(7,13)

                        // pega do 13 ao 21
const sala3 = nomes.slice(13,21)

console.log(`Aluno da sala 1: ${sala1}`)
console.log(`Aluno da sala 2: ${sala2}`)
console.log(`Aluno da sala 3: ${sala3}`)


// DESAFIO: Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto em todas as notas

const notas = [10, 9, 8, 7, 6]

/* const notasAtualizadas = notas.map( nota => nota +1) // Não ideal, porque se tirar dez soma mais um - chegando a onze - e ultrapassa nota máxima */

// Refatorando para ficar dentro da regra (máximo 10)
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)
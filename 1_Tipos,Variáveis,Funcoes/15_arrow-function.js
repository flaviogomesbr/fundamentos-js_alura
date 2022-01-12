// Função método extenso PT.1
function apresentarComum(nome) {  // 1a função do código
  return `meu nome é ${nome}`;
}

// Função método extenso PT.2
function somaComum(num1, num2) {  // 2a função do código
  return num1 + num2;
}

// Utilizando Arrow function na 1a função
const apresentarArrow = nome => `meu nome é ${nome}`;

// Utilizando Arrow function na 2a função
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
  if ((num1 || num2) >= 20) {
    return "somente números de 1 a 19"
  } else {
    return num1 + num2;
  }
}

// IMPORTANTE 1: Hoisting - arrow function se comporta como expressão
// IMPORTANTE 2: não confundir Arrow (=>) com operador 'maior ou igual que' (>=)


console.log(apresentarComum("Thomas")); // Retorna a 1a função do código e assim por diante
console.log(somaComum(2, 40));
console.log(apresentarArrow("Pedro"));
console.log(soma(4, 8));
console.log(somaNumerosPequenos(1, 5));
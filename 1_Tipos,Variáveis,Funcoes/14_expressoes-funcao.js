// declaração de função

function minhaFuncao(param) {
  // bloco de código
}

minhaFuncao("param")

// expressão de função

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(4, 10))

// diferença principal: HOISTING (traduzindo, seria içar ou levantar)
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar()) //console.log antes da função funciona neste caso
function apresentar() {
  return "olá";
}

console.log(somaOutroExemplo(4, 10)) // Este terceiro item dará erro, em função do HOISTING. Como "somaOutroExemplo" foi declarado como "const", ela se comportará como uma variável. E variável não pode ser utilizada a menos que já tenhamos passoado por ela ou iniciado alguma vez. Para este trecho de código funcionar, este console.log(somaOutroExemplo(4, 10)) deve vir depois ou "somaOutroExemplo" deve ser uma função
const somaOutroExemplo = function(num1, num2) { return num1 + num2 }

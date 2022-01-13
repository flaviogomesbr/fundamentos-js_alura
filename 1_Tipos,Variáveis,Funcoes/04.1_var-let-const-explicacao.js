var respostaDeTudo = 42
let idade = 29 // única item declarado como "let"
const pi = 3.14

{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi) // retorna: 3.14 42 29, ou seja, recebeu novos valores e alterou todos os itens dentro deste bloco
}

console.log(respostaDeTudo, idade, pi) // retorna: 3.14 29 29, ou seja, var (3.14) e const (29) herdaram valores atribuídos no bloco anterior. Já o let, permaneceu como declarado inicialmente fora do bloco de código

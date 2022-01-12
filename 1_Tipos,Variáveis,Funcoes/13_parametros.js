// parâmetros de função

              //2       //2
// function soma(numero1, numero2) {
//   return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade} anos`;
}

// console.log(nomeIdade(32, "Flavio"))  IMPORTANTE: A ordem em que se declara os parâmetros é importante!
console.log(nomeIdade("Flavio", 32))

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) { // Numeros padronizados para não dar err no caso de passar o 2° parâmetro na multiplicação
  return numero1 * numero2;
}

console.log(soma (4, 5));

console.log(multiplica (4, 5));

                            //9    *     //7  = 63
console.log(multiplica(soma(4, 5), soma(4, 3)));  //Ou seja, está multiplicando o valor de duas somas

                            //9
console.log(multiplica(soma(4, 5))); // Como não foi passado o segundo parâmetro da multiplicação como no exemplo anterior, ele adotou o valor padrão (numero2 = 1), da function multiplica














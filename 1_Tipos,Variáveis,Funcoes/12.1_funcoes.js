// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //string anteriormente e depois passa a ser 2 -> valor de soma () pela questão de função chamar outra função
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma()); //Função dentro de outra função
// imprimeTexto("oi");
// imprimeTexto("outro texto");

// três formas de escrever funções

function soma(){
  //outros códigos
  //vários console.log()
  return 5 + 2; // Esta é a resposta. Necessário indicar o "return". IMPORTANTE: O return precisa ser a última linha da função! Antes desta linha, podem existir outros códigos, etc
}

console.log(soma())
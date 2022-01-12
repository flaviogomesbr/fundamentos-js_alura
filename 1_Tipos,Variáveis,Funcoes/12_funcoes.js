// let x = "";
// console.log(x);
// x = "oi";  //No console, não será exibido nada - porque não foi atribuído o "oi". A função tem o objetivo de isolar o bloco de código e executar em um momento específico - ou seja, pode se reaproveitar o código

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
  return 2 + 2; // Esta é a resposta. Necessário indicar o "return"
}

console.log(soma())
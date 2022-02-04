// DESAFIO: Pegar a idade, nome e se cursou faculdade (2° funcionária, Juliana)

idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [idades,nomes,faculdade]

            
console.log(`${funcionarios[1][1]}, sua idade é ${funcionarios[0][1]} e você cursou faculdade "${funcionarios[2][1]}"`)
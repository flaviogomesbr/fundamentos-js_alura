// DESAFIO: Dada uma marca de veículo, encontrar o modelo disponível na loja

const veiculos = ['Onix', 'Uno', 'Fit', 'Hilux', 'Gol']
                                                            //4
const marcaDosVeiculos = ['GM','Fiat','Honda','Toyota', 'Volks']

// includes faz uma busca verdadeiro ou falso (booleano) pelo tipo de dado. Ou seja, está indo no array[1] marcaDosVeiculos e verificando se existe o nome lançado no console.log. Se for verdadeiro, entra no if

// indexOf procura o número do índice compatível com o nome lançado no console.log. 

let listaDeVeiculosEMarcas = [veiculos, marcaDosVeiculos]

const exibeNomeMarca = (nomeDaMarca) => {    // onde tiver o parâmetro "nomeDaMarca" será substituído pelo nome lançado no console.log
    if (listaDeVeiculosEMarcas[1].includes(nomeDaMarca)) { 
        let indice = listaDeVeiculosEMarcas[1].indexOf
        (nomeDaMarca)
                                // [0][3]
        return 'Da marca ' + listaDeVeiculosEMarcas[1][indice] + ', o veículo disponível na loja é o ' + listaDeVeiculosEMarcas[0][indice]    
    }
    else {
        return "Veículo não está cadastrado"
    }
}

console.log(exibeNomeMarca("Volks"))
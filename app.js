var calculoOpcoes = require('./modulo/calculoOpcoes.js');
var readline = require('readline');


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite qual é o valor da venda: ', function(vendaPreco){
    let preco = vendaPreco.replace(',','.')
    
    console.log('OPÇÕES DA COMPRA:')
    console.log('1- À vista com 8% de desconto.')
    console.log('2- À vista no cartão, 4% de dseconto.')
    console.log('3- Em 2x, preço normal sem juros.')
    console.log('4- Em 4x, preço acrescido de 8%.')
    console.log('* Escolha uma das opções acima: *')

    entradaDeDados.question('Digite uma das opções para sua compra: ', function(codigoDaCompra){
        let codigo = codigoDaCompra

        let resultado

        if (preco == ''){
            console.log('ERRO: É obrigatório digitar um PREÇO!')
        }
        else if (codigo == '' || codigo < 1 || codigo > 4){
            console.log('ERRO: A opção digitada é INVÁLIDA!') 
        }
        else if (isNaN(preco) || isNaN(codigo)){
            console.log('ERRO: É obrigatório a utilização de NÚMEROS!')
        }
        else{
            preco = Number(preco)
           resultado = calculoOpcoes.calcular(preco,codigo)
            if (resultado )
            console.log('O valor cobrado em sua compra é: R$'+ resultado)
            
            entradaDeDados.close()

        }
    })
})

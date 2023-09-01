function calcular (precoVenda, codigoDaCompra){

    let preco = precoVenda
    let codigo = codigoDaCompra
    let valor, respostaFinal, parcelamento

    if (codigo == 1){
        
       valor = preco - ( preco * (8 / 100))
        respostaFinal = `${preco} que será descontado 8% à vista, ficando no valor de = R$${valor.toFixed(2).replace('.', ',')}`
        
    }else if (codigo == 2){
        
        valor = preco- ( preco * (4 / 100))
        respostaFinal = `${preco} que será descontado 4% à vista, ficando no valor de = R$${valor.toFixed(2).replace('.', ',')}`

    }else if (codigo == 3){

        valor = preco
        parcelamento = valor / 2
        respostaFinal = `${preco} que será parcelado em 2x de = R$${parcelamento.toFixed(2).replace('.', ',')}`
    
    }else{

        valor = preco + ( preco * (8 / 100) )
        parcelamento = valor / 4
        respostaFinal = `${preco} que será parcelado em 4x, com acréscimo em 8% de = R$${parcelamento.toFixed(2).replace('.', ',')}`

    }

    return respostaFinal

}

module.exports ={
    calcular
}
function AnotarPedido(codigo, quantidade) {
    codigo = codigo.toString()
    if (quantidade > 0){
        switch(codigo){
            case '100':
                preco = (quantidade * 3.00).toFixed(2)
                console.log(`${quantidade} Cachorro(s) Quente(s) - R$${preco}`)
                break
            case '200':
                preco = (quantidade * 4.00).toFixed(2)
                console.log(`${quantidade} Hambúrguer(s) Simples - R$${preco}`)
                break
            case '300':
                preco = (quantidade * 5.00).toFixed(2)
                console.log(`${quantidade} Cheeseburguer(s) - R$${preco}`)
                break
            case '400':
                preco = (quantidade * 7.50).toFixed(2)
                console.log(`${quantidade} Bauru(s) - R$${preco}`)
                break
            case '500':
                preco = (quantidade * 3.50).toFixed(2)
                console.log(`${quantidade} Refrigerante(s) - R$${preco}`)
                break
            case '600':
                preco = (quantidade * 2.80).toFixed(2)
                console.log(`${quantidade} Suco(s) - R$${preco}`)
                break
            default:
                console.log('Pedido inválido.')
        }
    } else {
        console.log('Pedido inválido.')
    }
   
}

AnotarPedido(100, 2)
AnotarPedido('100', 2)

AnotarPedido('500', 1)
AnotarPedido('600', 3)
AnotarPedido('601', 2)
AnotarPedido('300', 0)
AnotarPedido('300', 4)
AnotarPedido('400', 5)
AnotarPedido('200', 3)
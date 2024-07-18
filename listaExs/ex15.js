function EscolhaCarro(tipo) {
    const opcao = tipo.toLowerCase()
    switch (opcao) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
            console.log('Compra efetuada com sucesso!')
            break
        case 'motocicleta':
            console.log('Compra efetuada com sucesso!')
            break
        case 'caminhonete':
            console.log('Compra efetuada com sucesso!')
            break
        default:
            console.log('Não tabalhamos com esse tipo de modelo aqui.')
    }
}

EscolhaCarro('Hatch')
EscolhaCarro('motocicleta')
EscolhaCarro('moto')
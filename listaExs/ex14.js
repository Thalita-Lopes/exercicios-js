const quitanda = function (fruta){
    if (fruta == 'maçã'){
        let tipo = 1
    } else if (fruta == 'kiwi'){
        tipo = 2
    } else if (fruta == 'melancia'){
        tipo = 3
    } else {
        tipo = 4
    }

    switch(tipo){
        case 1:
            console.log('Não vendemos esta fruta aqui')
            break
        case 2:
            console.log('Estamos com escassez de kiwis')
            break
        case 3:
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Erro: Não identificamos esta fruta')
    }
}

quitanda('kiwi')
quitanda('maçã')
quitanda('morango')
quitanda('melancia')
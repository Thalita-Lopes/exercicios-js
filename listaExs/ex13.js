const diaUtil = function (dia) {
    switch(dia) {
        case 1: case 7:
            console.log('Não é dia útil')
            break
        case 2: case 3: case 4: case 5: case  6:
            console.log('Dia útil')
            break
        default:
            console.log('Dia inválido')
    }
}

console.log(diaUtil(4))
console.log(diaUtil(8))
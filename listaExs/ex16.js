function Calculadora(valor1, valor2, operacao) {
    switch (operacao){
        case '+':
            console.log(`${valor1} + ${valor2} = ${valor1+valor2}`)
            break
        case '-':
            console.log(`${valor1} - ${valor2} = ${valor1-valor2}`)
            break
        case 'x':
            console.log(`${valor1} x ${valor2} = ${valor1*valor2}`)
            break
        case '/':
            console.log(`${valor1} / ${valor2} = ${valor1/valor2}`)
            break
        default:
            console.log('Operação inválida')
    }
}

Calculadora(2,5,'+')
Calculadora(2,5,'-')
Calculadora(2,5,'x')
Calculadora(2,5,'/')
Calculadora(2,5,'.')
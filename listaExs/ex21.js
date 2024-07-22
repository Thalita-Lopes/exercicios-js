function valorPlano(idade){
    let valor = 100
    if (idade > 60){
        valor += 130
    } else if (idade > 30) {
        valor += 95
    } else if (idade > 10) {
        valor += 50
    } else if (idade > 0) {
        valor += 80
    } else {
        console.log('Valor inválido')
    }
    return valor
}

console.log(`O valor do seu plano é R$${valorPlano(60)}`)
console.log(`O valor do seu plano é R$${valorPlano(62)}`)
console.log(`O valor do seu plano é R$${valorPlano(28)}`)
console.log(`O valor do seu plano é R$${valorPlano(10)}`)
console.log(`O valor do seu plano é R$${valorPlano(5)}`)
console.log(`O valor do seu plano é R$${valorPlano(-2)}`)
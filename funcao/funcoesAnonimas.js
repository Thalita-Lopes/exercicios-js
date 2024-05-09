const soma = function (x, y) {
    return x + y
}

const imprimir = function(a, b, operacao = soma) {
    return console.log(operacao(a, b))
}

imprimir(2, 3)
imprimir(2, 3, soma)
imprimir(2, 3, function (x, y) {
    return y - x
})

imprimir(2, 3, (x, y) => x * y)

const pessoa = {
    falar: () => console.log('Olá')
}

pessoa.falar()
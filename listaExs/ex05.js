function editarDinheiro(valor) {
    numero = valor.toFixed(2)
    dinheiroEditado = numero.toLocaleString('PT')
    return `R$${dinheiroEditado}`
}

console.log(editarDinheiro(0.123 + 3.3))
const aprovados = ['Agatha', 'aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const imprimirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(imprimirAprovados)

const imprimirIndice = (n, i) => console.log(i)
aprovados.forEach(imprimirIndice)
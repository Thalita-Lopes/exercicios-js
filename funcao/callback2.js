notas = [5.5, 6.2, 9.8, 9.2, 6.7, 7.5]

// sem calback
let notasBaixas = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)
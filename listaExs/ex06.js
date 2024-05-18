function jurosSimples(capital, taxa, tempo){
    let montante = capital * (1 + taxa * tempo)
    montante = montante.toFixed(2)
    return `R$${montante}`
}

function jurosCompostos(capital, taxa, tempo){
    let montante = capital * (1 + taxa) ** tempo
    montante = montante.toFixed(2)
    return `R$${montante}`
}

console.log(jurosSimples(1000, 0.025, 1))
console.log(jurosCompostos(2000, 0.04, 4))

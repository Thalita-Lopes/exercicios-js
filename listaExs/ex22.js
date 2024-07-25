function valorAnuidade(mes) {
    let valor = 1000
    let juros = 0.05
    let tempo = mes - 1
    if (tempo > 0){
        valor = valor*(1 + juros)*tempo
        console.log(`O valor de anuidade a ser pago é de R$${valor.toFixed(2)}`)
    } else {
        console.log(`O valor de anuidade a ser pago é de R$${valor.toFixed(2)}`)
    }
    
    
}

valorAnuidade(2)
valorAnuidade(3)
valorAnuidade(4)
valorAnuidade(5)
valorAnuidade(6)
valorAnuidade(7)
valorAnuidade(8)
valorAnuidade(9)
valorAnuidade(10)
valorAnuidade(12)
valorAnuidade(1)

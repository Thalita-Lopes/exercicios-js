const stringPontuacao = '10 20 20 8 25 3 0 30 1'
const arrayPontuacao = stringPontuacao.split(' ')
console.log(arrayPontuacao)

function contagemRecordes(arrayPontuacao) {
    let QuantRecordes = 0
    for (let i = 0; i < arrayPontuacao.length; i++) {
        if (i == 0) {
            const primeiroJogo = arrayPontuacao[i]
        } else if (arrayPontuacao[i] > arrayPontuacao[i - 1]) {
            QuantRecordes += 1
        }  
    }
    return console.log(`Pedro bateu ${QuantRecordes} vezes o seu recorde`)
}

contagemRecordes(arrayPontuacao)
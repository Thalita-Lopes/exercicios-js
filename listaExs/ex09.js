function ArredondamentoNota (nota){
    resto = nota%5
    if (resto >= 3){
        nota = nota + (5 - resto)
    }
    return nota
}


function classificacaoNota (nota) {
    let novaNota = ArredondamentoNota(nota)
    if (novaNota < 40) {
        console.log(`Aluno Reprovado com nota = ${novaNota}`)
    } else if (novaNota < 70) {
        console.log(`Aluno em Recupeção com nota = ${novaNota}`)
    } else if ( nota <= 100) {
        console.log(`Aluno Aprovado com nota = ${novaNota}`)
    } else if (novaNota < 0 || novaNota > 100) {
        console.log('Nota Inválida.')
    }
}

classificacaoNota(17)
classificacaoNota(38)
classificacaoNota(68)
classificacaoNota(67)
classificacaoNota(36)
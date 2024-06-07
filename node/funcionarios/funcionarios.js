const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const mulheres = pessoa => pessoa.genero == 'F'
    const china = pessoa => pessoa.pais == 'China'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const mulherMenorSalario = funcionarios.filter(mulheres).filter(china).reduce(menorSalario)
    console.log(mulherMenorSalario)

    /*for (let i = 1; i < mulheresChinesas.length; i++){
        if (mulheresChinesas[i].salario > mulheresChinesas[i-1].salario){
            var mulherMaisRica = mulheresChinesas[i].nome
        }
    }
    console.log(mulherMaisRica)*/

})

// DESAFIO: A mulher chinesa com menor salário

// vou trabalhar com a array funcionários

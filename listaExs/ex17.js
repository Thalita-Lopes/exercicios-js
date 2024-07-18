function CalculaNovoSalario(salario, plano) {
    let aumento = 0
    switch(plano){
        case 'Plano A':
            aumento = (salario*0.1)
            console.log(`Seu novo salário é R${salario+aumento}`)
            break
        case 'Plano B':
            aumento = (salario*0.15)
            console.log(`Seu novo salário é R${salario+aumento}`)
            break
        case 'Plano C':
            aumento = (salario*0.2)
            console.log(`Seu novo salário é R${salario+aumento}`)
            break
        default:
            console.log('Plano inválido.')
    }
}

CalculaNovoSalario(2560.00,'Plano A')
CalculaNovoSalario(2560.00,'Plano B')
CalculaNovoSalario(2560.00,'Plano C')
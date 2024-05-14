const classificaTriangulo = function(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('O triâgulo é Equilátero')
    } else if ((lado1 == lado2 && lado1 != lado3) || (lado1 != lado2 && lado1 == lado3) || (lado1 != lado2 && lado2 == lado3) ) {
        console.log('O triângulo é Escaleno')
    } else if (lado1 != lado2 && lado1 != lado3) {
        console.log('O triângulo é Isóseles')
    } else {
        console.log('Não foi classificado!')
    }
}

classificaTriangulo(3,3,3)
classificaTriangulo(3,2,3)
classificaTriangulo(2,3,4)

classificaTriangulo(2,2,3)
classificaTriangulo(3,2,2)
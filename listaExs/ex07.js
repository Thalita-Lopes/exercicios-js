const resolveBhaskara = function(a, b, c) {
    let x1 = 0
    let x2 = 0
    let delta = (b**2 - 4*a*c)
    let numeradorPositivo = -b + delta**(1/2)
    let numeradorNegativo = -b - delta**(1/2)
    let denominador = 2*a
    x1 = numeradorPositivo/denominador
    x2 = numeradorNegativo/denominador

    if (x1 >= 0){
        console.log(`x1 = ${x1.toFixed(2)} Resultado Positivo`)
    } else if ( x1 < 0) {
        console.log(`x1 = ${x1.toFixed(2)} Resultado Negativo`)
    } 
    if (x2 >= 0){
        console.log(`x2 = ${x2.toFixed(2)} Resultado Positivo`)
    } else if ( x2 < 0) {
        console.log(`x2 = ${x2.toFixed(2)} Resultado Negativo`)
    } 
    
}

resolveBhaskara(2, -16, -18)
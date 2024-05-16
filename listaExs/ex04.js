function dividir(dividendo, divisor = 1) {
    if (dividendo == 0 || divisor == 0){
        console.log('Valores indivisiveís')
    } else {
        let resultado = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`O resultado da divisão entre ${dividendo} e ${divisor} é ${resultado}` )
    console.log(`O resto da divisão entre ${dividendo} e ${divisor} é ${resto}`)
    }
}

dividir(4, 2)
dividir(3, 2)
dividir(0, 1)
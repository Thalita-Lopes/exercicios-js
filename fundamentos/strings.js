const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não retorna Erro, retorna vazio.
console.log(escola.charCodeAt(3)) // Retorna valor da tabela unicode
console.log(escola.indexOf('3')) // Retorna o índice onde está o valor '3'

console.log(escola.substring(1)) // Do índice 1 até o final
console.log(escola.substring(0, 3)) // Do índice 0 até o índice 3-1

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log('3' + 2)
console.log(escola.replace(3, 'e')) // substitui o 3 pela letra 'e'
console.log(escola.replace('C', 'A')) //substitui o 'C' pela letra 'A'
console.log('Ana,Maria,Pedro'.split(',')) // Tranformando a string em uma array, onde o separador é ','

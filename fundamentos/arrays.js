const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Se eu tento acessar um valor que não existe, ele não dá erro, dá undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)// diz quantos elementos tem dentro do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retorna e exclui o último elemento do array
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores) // array é do tipo object
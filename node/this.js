console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// Dentro de uma função o this aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

//Numa função Arrow é diferente, o this aponta para module.exports

const arrowFunction = () => {
    console.log("Não aponta para o global ->", this === global)
    console.log("Aponta para o exports ->", this === exports)
    console.log("Aponta para o module.exports (que é basicamente o mesmo que exports) ->", this === module.exports)

    console.log("O this nesta função NÃO É GLOBAL ->", this === global)
    console.log("O this nesta função É O MODULE.EXPORTS ->", this === module.exports)
}

arrowFunction()
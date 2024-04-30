function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
//console.log('a =', a)


//o efeito de içamento quando a variável é declarada com let não ocorre

console.log('b =', b)
let b = 3
console.log('b =', b)
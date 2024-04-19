console.log(7 / 0) // = Infinity 
console.log("10" / 2)
console.log('3' + 2) // Não soma, concatena ->pois a string tem preferência
console.log('3' - 1) // Ele subtrai, pq não faz sentido subtrair string, logo ele entende como número
console.log("Show!" * 2 ) // = NaN
console.log(0.1 + 0.7) // = 0.7999999999
// console.log(10.toSring()) -> não funciona
console.log((10.345).toFixed(2)) // Funciona se o número estiver entre parenteses
let a = (10).toString()
console.log(typeof a)
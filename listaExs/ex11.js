function anoBissexto(ano) {
 if (ano%100 == 0){
    return false
 } else if (ano%400 == 0){
    return true
 } else if (ano%4 == 0) {
    return true
 } else {
    return false
 }
}

console.log(anoBissexto(2024))
console.log(anoBissexto(2022))
console.log(anoBissexto(2016))
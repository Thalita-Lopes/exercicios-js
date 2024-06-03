const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const jsonToObject = e => JSON.parse(e)
const apenasPreco = e => e.preco

let resultado = carrinho.map(jsonToObject).map(apenasPreco)


console.log(resultado)
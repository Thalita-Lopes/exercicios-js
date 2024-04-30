const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// o let respeita o escopo de função e escopo de bloco, então o valor de i armazena valores diferentes


// Uma função tem consciência do local onde ela foi definida
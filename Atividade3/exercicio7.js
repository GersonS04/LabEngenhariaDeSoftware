console.log('Qual alternativa corresponde a 120?')
console.log('1) 50 + 60')
console.log('2) 40 x 4')
console.log('3) 5!')
console.log('4) 600 / 4')

let resposta = prompt('Digite a alternativa que julgar correta: ')

const verificarResposta = (resposta) => {
    if (Number(resposta) === 3) {
        return 'Resposta correta!'
    } else {
        return 'Tente novamente!'
    }
}

console.log(verificarResposta(resposta))

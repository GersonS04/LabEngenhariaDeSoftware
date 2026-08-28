const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Qual alternativa corresponde a 120?');
console.log('1) 50 + 60');
console.log('2) 40 x 4');
console.log('3) 5!');
console.log('4) 600 / 4');

rl.question('Digite a alternativa que julgar correta: ', (resposta) => {

    const verificarResposta = (resposta) => {
        if (Number(resposta) === 3) {
            return 'Resposta correta!';
        } else {
            return 'Tente novamente!';
        }
    };

    console.log(verificarResposta(resposta));

    rl.close();
});

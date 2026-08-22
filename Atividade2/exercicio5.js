const notas = [5, 6, 8, 10];

soma = 0;

for (let i = 0; i < notas.length; i++) {
    
    soma = soma + notas[i];
}

let media = soma / notas.length

if (media >= 7) {

    console.log('Sua média é '+ media + ' e você está Aprovado!')
    
}
else {

    console.log('Sua média é '+ media +' e você foi reprovado!')
}
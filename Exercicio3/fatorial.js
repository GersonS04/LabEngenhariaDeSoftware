let n = Number(prompt("Digite um número inteiro positivo: "));

let fatorial = 1;
let contador = 1;

for(contador = 1; contador <= n; contador++){
    fatorial = fatorial * contador
}
alert(n + "! é igual a: "+ fatorial);
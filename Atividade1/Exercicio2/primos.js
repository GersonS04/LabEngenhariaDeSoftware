let n = Number(prompt("Digite um número inteiro positivo: "));
let i = 1;
let div = 0;

for(i = 1; i <= n; i++){
    if(n % i == 0){
        div = div + 1
    }
}
if(div == 2){
    alert("O número: "+ n + " é primo!");
}
else{
    alert("O número "+ n +" não é primo!");
};

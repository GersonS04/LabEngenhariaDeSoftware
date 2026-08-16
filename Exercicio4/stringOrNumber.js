let dado = prompt("Digite um dado (Texto ou número):");

if (!isNaN(dado)) {
    dado = Number(dado);
}

if(confirm("Deseja saber o tipo de dado digitado?")){
    alert("O tipo de dado é: "+ typeof dado)
}
else{
    alert("Obrigado por visitar nossa página!")
}
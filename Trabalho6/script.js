let quantidadeHomens = 0;
let quantidadeMulheres = 0;

const homens = document.getElementById("homens");
const mulheres = document.getElementById("mulheres");
const total = document.getElementById("total");

function atualizarTotal() {
    total.textContent = quantidadeHomens + quantidadeMulheres;
}

document.getElementById("aumentarHomens").addEventListener("click", function () {
    quantidadeHomens++;
    homens.textContent = quantidadeHomens;
    atualizarTotal();
});

document.getElementById("diminuirHomens").addEventListener("click", function () {
    if (quantidadeHomens > 0) {
        quantidadeHomens--;
        homens.textContent = quantidadeHomens;
        atualizarTotal();
    }
});

document.getElementById("aumentarMulheres").addEventListener("click", function () {
    quantidadeMulheres++;
    mulheres.textContent = quantidadeMulheres;
    atualizarTotal();
});

document.getElementById("diminuirMulheres").addEventListener("click", function () {
    if (quantidadeMulheres > 0) {
        quantidadeMulheres--;
        mulheres.textContent = quantidadeMulheres;
        atualizarTotal();
    }
});
const jurosCompostos = (valorInicial, juros, tempo) => {
    return valorInicial * (1 + juros / 100) ** tempo;
}
console.log(jurosCompostos(100, 10, 10).toFixed(2));

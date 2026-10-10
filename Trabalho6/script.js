const visor = document.getElementById("resultado");
const expressao = document.getElementById("expressao");
const botoes = document.querySelector(".botoes");

let numeroAtual = "0";
let numeroAnterior = null;
let operador = null;
let reiniciarVisor = false;
let erro = false;

function atualizarVisor() {
    visor.textContent = numeroAtual.replace(".", ",");
}

function calcular(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return null;
            }
            return a / b;
        default:
            return b;
    }
}

function formatarResultado(valor) {
    if (!Number.isFinite(valor)) {
        return null;
    }

    return String(Number(valor.toFixed(8)));
}

function limpar() {
    numeroAtual = "0";
    numeroAnterior = null;
    operador = null;
    reiniciarVisor = false;
    erro = false;

    expressao.textContent = "";

    document.querySelectorAll(".operador").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    atualizarVisor();
}

function adicionarNumero(numero) {
    if (erro) {
        limpar();
    }

    if (reiniciarVisor) {
        numeroAtual = numero;
        reiniciarVisor = false;
    } else if (numeroAtual === "0") {
        numeroAtual = numero;
    } else if (numeroAtual === "-0") {
        numeroAtual = "-" + numero;
    } else if (numeroAtual.replace("-", "").length < 14) {
        numeroAtual += numero;
    }
    atualizarVisor();
}

function adicionarDecimal() {
    if (erro) {
        limpar();
    }

    if (reiniciarVisor) {
        numeroAtual = "0";
        reiniciarVisor = false;
    }

    if (!numeroAtual.includes(".")) {
        numeroAtual += ".";
    }
    atualizarVisor();
}

function escolherOperador(novoOperador) {
    if (erro) {
        limpar();
    }

    if (operador !== null && !reiniciarVisor) {
        const resultado = calcular(
            Number(numeroAnterior),
            Number(numeroAtual),
            operador
        );

        const formatado = formatarResultado(resultado);

        if (formatado === null) {
            mostrarErro();
            return;
        }

        numeroAtual = formatado;
        atualizarVisor();
    }

    numeroAnterior = Number(numeroAtual);
    operador = novoOperador;
    reiniciarVisor = true;

    expressao.textContent =
        numeroAtual.replace(".", ",") + " " + simboloOperador(operador);

    document.querySelectorAll(".operador").forEach(botao => {
        botao.classList.toggle(
            "selecionado",
            botao.dataset.value === operador
        );
    });
}

function simboloOperador(op) {
    const simbolos = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷"
    };

    return simbolos[op];
}

function mostrarResultado() {
    if (erro || operador === null || reiniciarVisor) {
        return;
    }

    const a = numeroAnterior;
    const b = Number(numeroAtual);
    const op = operador;

    const resultado = calcular(a, b, op);
    const formatado = formatarResultado(resultado);

    if (formatado === null) {
        mostrarErro();
        return;
    }

    expressao.textContent =
        a.toString().replace(".", ",") + " " +
        simboloOperador(op) + " " +
        b.toString().replace(".", ",") + " =";

    numeroAtual = formatado;
    numeroAnterior = null;
    operador = null;
    reiniciarVisor = true;

    document.querySelectorAll(".operador").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    atualizarVisor();
}

function inverterSinal() {
    if (erro) {
        limpar();
    }

    if (numeroAtual !== "0") {
        numeroAtual = numeroAtual.startsWith("-")
            ? numeroAtual.slice(1)
            : "-" + numeroAtual;
    }

    atualizarVisor();
}

function calcularPorcentagem() {
    if (erro) {
        limpar();
    }

    numeroAtual = String(Number(numeroAtual) / 100);
    atualizarVisor();
}

function mostrarErro() {
    numeroAtual = "Erro";
    numeroAnterior = null;
    operador = null;
    reiniciarVisor = true;
    erro = true;

    expressao.textContent = "Operação inválida";

    document.querySelectorAll(".operador").forEach(botao => {
        botao.classList.remove("selecionado");
    });

    atualizarVisor();
}

botoes.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");

    if (!botao) {
        return;
    }
    if (botao.dataset.number !== undefined) {
        adicionarNumero(botao.dataset.number);
        return;
    }
    const acao = botao.dataset.action;

    switch (acao) {
        case "limpar":
            limpar();
            break;
        case "decimal":
            adicionarDecimal();
            break;
        case "sinal":
            inverterSinal();
            break;
        case "porcentagem":
            calcularPorcentagem();
            break;
        case "operador":
            escolherOperador(botao.dataset.value);
            break;
        case "igual":
            mostrarResultado();
            break;
    }
});

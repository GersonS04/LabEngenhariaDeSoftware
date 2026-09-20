// criando variaveis para os elementos do html
const campoProduto = document.getElementById("campoProduto");
const btAdicionar = document.getElementById("btAdicionar");
const listaProdutos = document.getElementById("listaProdutos");

// Funcionalidade do Botão Adicionar
btAdicionar.addEventListener("click", function() {

    const produto = campoProduto.value.trim();

    if (produto === "") {
        alert("Digite um produto!");
        return; // Não permitir adicionar produtos "vazios" 
    }

    const item = document.createElement("li");
    
    const textoProduto = document.createElement("span"); // Cria o texto do produto na lista
    textoProduto.textContent = produto;

    // Área dos botões:
    const acoes = document.createElement("div");
    acoes.classList.add("acoes");

    const btEditar = document.createElement("button"); // Cria botão "Editar"
    btEditar.textContent = "Editar";
    btEditar.classList.add("btn-editar");

    const btExcluir = document.createElement("button") //Cria botão "Excluir"
    btExcluir.textContent = "Excluir";
    btExcluir.classList.add("btn-excluir");

    btExcluir.addEventListener("click", function() {
        item.remove(); // Remove o item ao clicar
    });

    // Cria Botão "Editar"
    btEditar.addEventListener("click", function() {
        const novoProduto = prompt(
            "Digite o novo nome do produto:",
            textoProduto.textContent
        );
        if (novoProduto !== null && novoProduto.trim() !== "") {
            textoProduto.textContent = novoProduto.trim();
        }
    });

    // Organiza os elementos (DOM)
    acoes.appendChild(btEditar);
    acoes.appendChild(btExcluir);
    item.appendChild(textoProduto);
    item.appendChild(acoes);
    listaProdutos.appendChild(item);

    // Limpa os campos dps de add
    campoProduto.value = "";
    campoProduto.focus();
});
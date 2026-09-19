// Exercício1:
const pessoa = {
    nome: "Gerson",
    idade: 27,
    profissao: "Analista de Dados"
};
console.log("Exercício 1:");
console.log(pessoa);

// Exercício2:
console.log("\nExercício 2:");
console.log("Nome: " + pessoa.nome);

// Exercício3:
pessoa.idade = 28;
console.log("\nExercício 3:");
console.log("Nova idade: " + pessoa.idade);

// Exercício4:
pessoa.cidade = "Presidente Prudente";
console.log("\nExercício 4:");
console.log(pessoa);

// Exercício5: 
function apresentarPessoa(pessoa) {
    return "Meu nome é " + pessoa.nome + ", tenho " + pessoa.idade + " anos e sou " + pessoa.profissao;
};
console.log("\nExercício 5:");
console.log(apresentarPessoa(pessoa));

// Exercício6:
const pessoas = [
    {
        nome: "Ana",
        idade: 25
    },
    {
        nome: "Bruno",
        idade: 15
    },
    {
        nome: "Carla",
        idade: 26
    }
];
console.log("\nExercício 6:");
console.log(pessoas);

// Exercício7:
console.log("\nExercício 7:");
for (const pessoa of pessoas) {
    if (pessoa.idade >= 18) {
        console.log(pessoa.nome);
    }
};

// Exercício8:
const produto = {
    preco: 150,
    quantidade: 3
};

const valorTotal = produto.preco * produto.quantidade;

console.log("\nExercício 8:");
console.log("Preço produto: " + produto.preco);
console.log("Quantidade: " + produto.quantidade);
console.log("Preço total: " + valorTotal);

// Exercício9:
const livro1 = {
    titulo: "O homem mais rico da babilônia",
    autor: "George S. Clason",
    anoPublicacao: 1926,
    genero: "Finanças Pessoais"
};
console.log("\nExercício 9:");
console.log(livro1);

// Exercício10:
const anoAtual = new Date().getFullYear();

const livro2 = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia"
};

livro1.idadePublicacao = anoAtual - livro1.anoPublicacao;

const mostrarDetalhes = "Título: " + livro2.titulo + "\nAutor: " + livro2.autor + "\nAno de publicação: " + livro2.anoPublicacao + "\nGênero: " + livro2.genero + "\nIdade de Publicação: " + livro2.idadePublicacao + " anos.";

console.log("\nExercício 10:");
console.log(mostrarDetalhes);

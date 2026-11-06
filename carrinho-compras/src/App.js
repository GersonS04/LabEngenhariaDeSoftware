import React, { useState } from 'react';
import './App.css';

const produtos = [
  { id: 1, nome: 'Camiseta básica', categoria: 'Vestuário', preco: 49.90, emoji: '👕' },
  { id: 2, nome: 'Tênis casual', categoria: 'Calçados', preco: 159.90, emoji: '👟' },
  { id: 3, nome: 'Mochila', categoria: 'Acessórios', preco: 89.90, emoji: '🎒' },
  { id: 4, nome: 'Fone de ouvido', categoria: 'Eletrônicos', preco: 79.90, emoji: '🎧' }
];

function dinheiro(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function Produto({ produto, adicionar }) {
  return <article className="produto">
    <div className="emoji">{produto.emoji}</div>
    <div className="detalhes">
      <small>{produto.categoria}</small>
      <h3>{produto.nome}</h3>
      <strong>{dinheiro(produto.preco)}</strong>
    </div>
    <button className="adicionar" onClick={() => adicionar(produto)}>Adicionar</button>
  </article>;
}

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho(itens => {
      const encontrado = itens.find(item => item.id === produto.id);
      return encontrado
        ? itens.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
        : [...itens, { ...produto, quantidade: 1 }];
    });
  }

  function alterarQuantidade(id, variacao) {
    setCarrinho(itens => itens
      .map(item => item.id === id ? { ...item, quantidade: item.quantidade + variacao } : item)
      .filter(item => item.quantidade > 0));
  }

  function remover(id) {
    setCarrinho(itens => itens.filter(item => item.id !== id));
  }

  const quantidadeTotal = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  return <main className="pagina">
    <header className="topo">
      <div><h1>🛍️ Carrinho de compras</h1></div>
      <span className="contador">🛒 {quantidadeTotal} {quantidadeTotal === 1 ? 'item' : 'itens'}</span>
    </header>

    <section className="painel">
      <p className="etiqueta">ESCOLHA SEUS FAVORITOS</p>
      <h2>Produtos</h2>
      <div className="produtos">
        {produtos.map(produto => <Produto key={produto.id} produto={produto} adicionar={adicionar} />)}
      </div>
    </section>

    <section className="painel">
      <p className="etiqueta">SEUS ITENS SELECIONADOS</p>
      <h2>Meu carrinho <span className="badge">{quantidadeTotal}</span></h2>
      {carrinho.length === 0 ? <div className="vazio"><span>🛒</span><h3>Seu carrinho está vazio</h3><p>Adicione um produto para começar sua compra.</p></div> :
        <div>{carrinho.map(item => <article className="item" key={item.id}>
          <div className="emoji">{item.emoji}</div>
          <div className="detalhes"><h3>{item.nome}</h3><small>{dinheiro(item.preco)} cada</small><strong>{dinheiro(item.preco * item.quantidade)}</strong></div>
          <div className="acoes">
            <div className="quantidade">
              <button onClick={() => alterarQuantidade(item.id, -1)} aria-label="Diminuir quantidade">−</button>
              <span>{item.quantidade}</span>
              <button onClick={() => alterarQuantidade(item.id, 1)} aria-label="Aumentar quantidade">+</button>
            </div>
            <button className="remover" onClick={() => remover(item.id)}>Remover</button>
          </div>
        </article>)}</div>}
      <div className="resumo">
        <div><span>Quantidade de itens</span><strong>{quantidadeTotal}</strong></div>
        <div className="total"><span>Total da compra</span><strong>{dinheiro(total)}</strong></div>
        <button className="finalizar" disabled={carrinho.length === 0} onClick={() => window.alert('Compra demonstrativa! Nenhum pagamento será realizado.')}>Finalizar compra</button>
      </div>
    </section>
  </main>;
}

export default App;

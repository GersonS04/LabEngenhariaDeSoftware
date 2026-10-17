import React, { useState } from 'react';
import './App.css';

function BonecoHomem() {
  return (
    <svg viewBox="0 0 80 110" className="boneco" aria-hidden="true">
      <circle cx="40" cy="15" r="11" />
      <rect x="29" y="30" width="22" height="40" rx="5" />
      <rect x="17" y="33" width="10" height="38" rx="5" />
      <rect x="53" y="33" width="10" height="38" rx="5" />
      <rect x="29" y="67" width="10" height="38" rx="5" />
      <rect x="41" y="67" width="10" height="38" rx="5" />
    </svg>
  );
}

function BonecoMulher() {
  return (
    <svg viewBox="0 0 80 110" className="boneco" aria-hidden="true">
      <circle cx="40" cy="15" r="11" />
      <path d="M29 30 L51 30 L61 69 L19 69 Z" />
      <rect x="17" y="33" width="10" height="38" rx="5" />
      <rect x="53" y="33" width="10" height="38" rx="5" />
      <rect x="29" y="66" width="10" height="39" rx="5" />
      <rect x="41" y="66" width="10" height="39" rx="5" />
    </svg>
  );
}

function App() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  function diminuirHomens() {
    setHomens((quantidade) => Math.max(0, quantidade - 1));
  }

  function diminuirMulheres() {
    setMulheres((quantidade) => Math.max(0, quantidade - 1));
  }

  return (
    <main className="contador">
      <h1>Contador de Pessoas</h1>

      <div className="categorias">
        <section className="categoria homens">
          <BonecoHomem />
          <p className="numero" aria-live="polite">{homens}</p>
          <h2>Homens</h2>
          <div className="botoes">
            <button type="button" onClick={diminuirHomens} aria-label="Diminuir homens">−</button>
            <button type="button" onClick={() => setHomens((quantidade) => quantidade + 1)} aria-label="Aumentar homens">+</button>
          </div>
        </section>

        <section className="categoria mulheres">
          <BonecoMulher />
          <p className="numero" aria-live="polite">{mulheres}</p>
          <h2>Mulheres</h2>
          <div className="botoes">
            <button type="button" onClick={diminuirMulheres} aria-label="Diminuir mulheres">−</button>
            <button type="button" onClick={() => setMulheres((quantidade) => quantidade + 1)} aria-label="Aumentar mulheres">+</button>
          </div>
        </section>
      </div>

      <section className="total" aria-live="polite">
        <h2>Total de pessoas</h2>
        <p>{total}</p>
      </section>
    </main>
  );
}

export default App;

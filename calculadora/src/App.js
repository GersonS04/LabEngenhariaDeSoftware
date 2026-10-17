import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [expression, setExpression] = useState('');
  const [error, setError] = useState(false);

  const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };

  function clear() {
    setDisplay('0'); setPrevious(null); setOperator(null);
    setWaiting(false); setExpression(''); setError(false);
  }

  function format(value) {
    if (!Number.isFinite(value)) return null;
    return String(Number(value.toFixed(8))).replace('.', ',');
  }

  function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b === 0 ? null : a / b;
    return b;
  }

  function digit(value) {
    if (error) clear();
    if (waiting || error) {
      setDisplay(value); setWaiting(false); setError(false); return;
    }
    setDisplay(current => current === '0' ? value :
      (current.replace('-', '').length < 14 ? current + value : current));
  }

  function decimal() {
    if (error) { clear(); setDisplay('0,'); setWaiting(false); return; }
    if (waiting) { setDisplay('0,'); setWaiting(false); return; }
    setDisplay(current => current.includes(',') ? current : current + ',');
  }

  function chooseOperator(op) {
    if (error) return;
    const current = Number(display.replace(',', '.'));
    let value = current;
    if (operator && !waiting) {
      value = calculate(previous, current, operator);
      const formatted = format(value);
      if (formatted === null) { showError(); return; }
      setDisplay(formatted);
      value = Number(formatted.replace(',', '.'));
    }
    setPrevious(value); setOperator(op); setWaiting(true);
    setExpression(`${format(value)} ${symbols[op]}`);
  }

  function showError() {
    setDisplay('Erro'); setExpression('Não é possível dividir por zero');
    setPrevious(null); setOperator(null); setWaiting(true); setError(true);
  }

  function equals() {
    if (error || operator === null || waiting) return;
    const current = Number(display.replace(',', '.'));
    const result = calculate(previous, current, operator);
    const formatted = format(result);
    if (formatted === null) { showError(); return; }
    setExpression(`${format(previous)} ${symbols[operator]} ${display} =`);
    setDisplay(formatted); setPrevious(null); setOperator(null); setWaiting(true);
  }

  function sign() {
    if (error) { clear(); return; }
    if (display !== '0') setDisplay(current => current.startsWith('-') ? current.slice(1) : '-' + current);
  }

  function percent() {
    if (!error) {
      const formatted = format(Number(display.replace(',', '.')) / 100);
      if (formatted !== null) setDisplay(formatted);
    }
  }

  const buttons = [
    { label: 'AC', action: clear, type: 'special' },
    { label: '±', action: sign, type: 'special' },
    { label: '%', action: percent, type: 'special' },
    { label: '÷', op: '/', type: 'operator' },
    { label: '7', digit: '7' }, { label: '8', digit: '8' }, { label: '9', digit: '9' },
    { label: '×', op: '*', type: 'operator' },
    { label: '4', digit: '4' }, { label: '5', digit: '5' }, { label: '6', digit: '6' },
    { label: '−', op: '-', type: 'operator' },
    { label: '1', digit: '1' }, { label: '2', digit: '2' }, { label: '3', digit: '3' },
    { label: '+', op: '+', type: 'operator' },
    { label: '0', digit: '0', type: 'zero' },
    { label: ',', action: decimal },
    { label: '=', action: equals, type: 'operator' }
  ];

  return (
    <main className="calculadora">
      <h1>Calculadora</h1>
      <section className="visor" aria-live="polite">
        <p className="expressao">{expression}</p>
        <p className="resultado">{display}</p>
      </section>
      <section className="botoes" aria-label="Teclado da calculadora">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            className={['botao', button.type || 'numero', button.type === 'zero' ? 'zero' : '',
              button.op && operator === button.op ? 'selecionado' : ''].filter(Boolean).join(' ')}
            onClick={() => button.digit !== undefined ? digit(button.digit) :
              button.op ? chooseOperator(button.op) : button.action()}
          >{button.label}</button>
        ))}
      </section>
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import './Pagina4.css';

function Pagina4() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operacao, setOperacao] = useState('');

  const handleSubmit = (operacao) => {
    if (numero1 === '' || numero2 === '') {
      alert('Por favor, insira dois números!');
      return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    let res;
    switch (operacao) {
      case 'soma':
        res = num1 + num2;
        break;
      case 'subtracao':
        res = num1 - num2;
        break;
      case 'multiplicacao':
        res = num1 * num2;
        break;
      case 'divisao':
        if (num2 === 0) {
          alert('Divisão por zero não permitida!');
          return;
        }
        res = num1 / num2;
        break;
      default:
        res = null;
        break;
    }

    setResultado(res);
    setOperacao(operacao);
  };

  return (
    <div className="pagina4">
      <h2>🧮 Calculadora de 4 Operações</h2>
      
      <div className="inputs">
        <input 
          type="number" 
          value={numero1} 
          onChange={(e) => setNumero1(e.target.value)} 
          placeholder="Digite o primeiro número"
        />
        <input 
          type="number" 
          value={numero2} 
          onChange={(e) => setNumero2(e.target.value)} 
          placeholder="Digite o segundo número"
        />
      </div>

      <div className="botoes">
        <button onClick={() => handleSubmit('soma')}>Soma (+)</button>
        <button onClick={() => handleSubmit('subtracao')}>Subtração (-)</button>
        <button onClick={() => handleSubmit('multiplicacao')}>Multiplicação (×)</button>
        <button onClick={() => handleSubmit('divisao')}>Divisão (÷)</button>
      </div>

      {resultado !== null && (
      <div className="resultado">
      <h3>Resultado da {operacao}: {resultado}</h3>
      </div>
      )}

    </div>
  );
}

export default Pagina4;

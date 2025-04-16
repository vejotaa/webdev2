import React, { useState } from 'react';
import './Pagina2.css';

function Pagina2() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <div className="pagina2">
      <h2>🔢 Click Counter</h2>
      <div className="contador">{contador}</div>
      <div className="botoes">
        <button onClick={incrementar}>Clique aqui</button>
        <button onClick={resetar} className="reset">Resetar</button>
      </div>
    </div>
  );
}

export default Pagina2;

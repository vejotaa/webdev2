import React, { useState } from 'react';
import './Pagina3.css';

function Pagina3() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null)); // 9 células, inicialmente vazias
  const [jogador, setJogador] = useState('X'); // Começa com X
  const [vencedor, setVencedor] = useState(null);

  const verificaVencedor = (tabuleiro) => {
    const linhas = [
      [0, 1, 2], // Linha 1
      [3, 4, 5], // Linha 2
      [6, 7, 8], // Linha 3
      [0, 3, 6], // Coluna 1
      [1, 4, 7], // Coluna 2
      [2, 5, 8], // Coluna 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (let linha of linhas) {
      const [a, b, c] = linha;
      if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
        return tabuleiro[a];
      }
    }
    return null;
  };

  const jogar = (indice) => {
    if (tabuleiro[indice] || vencedor) return; // Se a célula estiver preenchida ou já houver um vencedor, não faz nada

    const novasJogadas = tabuleiro.slice();
    novasJogadas[indice] = jogador; // Preenche a célula com o jogador atual

    setTabuleiro(novasJogadas);

    const ganhador = verificaVencedor(novasJogadas);
    if (ganhador) {
      setVencedor(ganhador);
    } else {
      setJogador(jogador === 'X' ? 'O' : 'X'); // Alterna entre X e O
    }
  };

  const reiniciar = () => {
    setTabuleiro(Array(9).fill(null));
    setVencedor(null);
    setJogador('X');
  };

  return (
    <div className="pagina3">
      <h2>🎮 Jogo da Velha</h2>
      <div className="tabuleiro">
        {tabuleiro.map((celula, index) => (
          <button key={index} className="celula" onClick={() => jogar(index)}>
            {celula}
          </button>
        ))}
      </div>
      {vencedor ? (
        <div className="vencedor">Jogador {vencedor} venceu!</div>
      ) : (
        <div className="turno">Vez do jogador: {jogador}</div>
      )}
      <button className="reiniciar" onClick={reiniciar}>Reiniciar Jogo</button>
    </div>
  );
}

export default Pagina3;

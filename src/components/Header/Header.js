import React from 'react';
import './Header.css'; // Importa o CSS para estilizar o cabeçalho

function Header() {
  return (
    <header>
      <h1>Meu Projeto</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/pagina1">Projeto 1</a>
        <a href="/pagina2">Projeto 2</a>
        <a href="/pagina3">Projeto 3</a>
        <a href="/pagina4">Projeto 4</a>
        <a href="/pagina5">Projeto 5</a>
      </nav>
    </header>
  );
}

export default Header;

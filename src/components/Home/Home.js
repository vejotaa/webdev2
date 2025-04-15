import React from 'react';
import Header from './../components/Header'; // Importa o cabeçalho

function home() {
  return (
    <>
      <Header /> {/* Renderiza o cabeçalho */}
      <h1>Home!</h1>
      {/* Conteúdo da página 1 aqui */}
    </>
  );
}

export default home;

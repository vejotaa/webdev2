import React from 'react';
import './App.css';
import Home from './components/Home';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Header from './components/Header'; // Importa o cabeçalho

function App() {
  return (
    <div className="App">
      <Header /> {/* Renderiza o cabeçalho */}
      <Home />
      <Pagina1 />
      <Pagina2 />
      {/* ... outros componentes */}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Pagina1.css';

function Pagina1() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  const adicionarTarefa = () => {
    if (input.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput('');
  };

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') adicionarTarefa();
  };

  return (
    <div className="pagina1">
      <h2>📝 Lista de Tarefas</h2>
      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.texto}</span>
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagina1;

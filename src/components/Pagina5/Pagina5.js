import React, { useState } from 'react';
import './Pagina5.css';

function Pagina5() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const buscarEndereco = async () => {
    if (!cep) {
      alert('Por favor, insira um CEP!');
      return;
    }

    const cepFormatado = cep.replace(/\D/g, ''); // Remover caracteres não numéricos

    if (cepFormatado.length !== 8) {
      alert('CEP inválido!');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`);
      const dados = await response.json();

      if (dados.erro) {
        setErro('CEP não encontrado!');
        setEndereco(null);
      } else {
        setEndereco(dados);
        setErro('');
      }
    } catch (error) {
      setErro('Erro ao buscar o CEP!');
      setEndereco(null);
    }
  };

  return (
    <div className="pagina5">
      <h2>📍 Buscar Endereço pelo CEP</h2>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Digite o CEP (ex: 01001000)" 
          value={cep} 
          onChange={(e) => setCep(e.target.value)} 
        />
        <button onClick={buscarEndereco}>Buscar</button>
      </div>

      {erro && <div className="erro">{erro}</div>}

      {endereco && (
        <div className="endereco">
          <h3>Endereço Encontrado:</h3>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
          <p><strong>Complemento:</strong> {endereco.complemento || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default Pagina5;

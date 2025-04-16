import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pagina1 from './components/Pagina1/Pagina1';
import Pagina2 from './components/Pagina2/Pagina2';
import Pagina3 from './components/Pagina3/Pagina3';
import Pagina4 from './components/Pagina4/Pagina4';
import Pagina5 from './components/Pagina5/Pagina5';

function App() {
  return (
    <div>
{       <Header /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pagina1" element={<Pagina1 />} />
        <Route path="/Pagina2" element={<Pagina2 />} />
        <Route path="/Pagina3" element={<Pagina3 />} />
        <Route path="/Pagina4" element={<Pagina4 />} />
        <Route path="/Pagina5" element={<Pagina5 />} />
      </Routes>
    </div>
  );
}

export default App;

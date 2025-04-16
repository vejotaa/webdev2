import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pagina1 from './components/Pagina1/Pagina1';
/* import Pag2 from './components/Pagina2/pag2';
import Pag3 from './components/Pagina3/pag3';
import Pag4 from './components/Pagina4/pag4';
import Pag5 from './components/Pagina5/pag5'; */

function App() {
  return (
    <div>
{       <Header /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pagina1" element={<Pagina1 />} />
{/*         <Route path="/pag2" element={<Pag2 />} />
        <Route path="/pag3" element={<Pag3 />} />
        <Route path="/pag4" element={<Pag4 />} />
        <Route path="/pag5" element={<Pag5 />} /> */}
      </Routes>
    </div>
  );
}

export default App;

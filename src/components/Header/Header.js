import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">Home</Link>
      <Link to="/Pagina1">To-Do</Link>
{/*       <Link to="/Pagina2">ClickCount</Link>
      <Link to="/Pagina3">TTT</Link>
      <Link to="/Pagina4">+-/*</Link>
      <Link to="/Pagina5">CEPFiND</Link> */}
    </nav>
  );
}

export default Header;

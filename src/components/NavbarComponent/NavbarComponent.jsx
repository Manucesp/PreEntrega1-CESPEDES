import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavbarComponent.css";

const NavbarComponent = () => {
  
  return (
    
    <nav className="navbar">

      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/categorias">categorias</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
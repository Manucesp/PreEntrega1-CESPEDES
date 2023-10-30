import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavbarComponent.css";

const NavbarComponent = () => {
  
  
  return (
    
    <nav className="navbar">
      <div className="logo">
        <img src="" alt="" />
      </div>

      <ul className="nav-links">
        
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca</a></li>
        <li><a href="/servicios">Productos</a></li>
        <li><a href="/contacto">Contacto </a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavbarComponent.css";

const NavbarComponent = () => {
  
  
  return (
    
    <nav className="navbar">
      
        
      <ul className="nav-links">
        
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Nosotros</a></li>
        <li><a href="/servicios">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
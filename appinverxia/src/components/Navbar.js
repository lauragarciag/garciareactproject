import React, { useState } from "react";
import "./Navbar.css";
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Inverxia - Educación Financiera</span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <NavLink to="/home" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
        <a href="/about">Quién soy</a>
        <a href="/excel">Cursos Excel</a>
        <a href="/finanzas">Cursos Finanzas</a>
        <a href="/inversion">Cursos Inversión</a>
        <a href="/contact">Contacto</a>
      </div>
      <CartWidget />
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>

        

      </div>
    </div>
  );
};

export default Navbar;
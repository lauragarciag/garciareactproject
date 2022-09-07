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
      <NavLink to="/" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
      <NavLink to='/category/Inversiones' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inversiones</NavLink>
      <NavLink to='/category/Excel' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Excel</NavLink>
      <NavLink to='/category/Finanzas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Finanzas</NavLink>
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
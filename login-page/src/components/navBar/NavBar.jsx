import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='navBar'>
      <div className='logo-Container'>
        <img id="logo" src={process.env.PUBLIC_URL + '/TX_BIG.png'}  alt="Logo" />
      </div>
      <div className='navLink-Container'>
        <a href="#DP" onClick={(e) => handleLinkClick(e, 'DP')}>Datos Personales</a>
        <a href="#CP" onClick={(e) => handleLinkClick(e, 'CP')}>Cliente Proveedor</a>
        <a href="#TL" onClick={(e) => handleLinkClick(e, 'TL')}>Trayectoria Laboral</a>
        <Link to="/main">
          <a href="*">Menu</a>
        </Link>
        <Link to="/">
          <a href="*">Cerrar Sesion</a>
        </Link>
        
      </div>
    </div>
  );
}





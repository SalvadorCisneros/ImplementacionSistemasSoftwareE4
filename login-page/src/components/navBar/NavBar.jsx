import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='logo-Container'>
        <img id="logo" src={process.env.PUBLIC_URL + '/TX_BIG.png'}  alt="Logo" />
      </div>
      <div className='navLink-Container'>
        <a href="*">Datos Personales</a>
        <a href="*">Cliente Provedor</a>
        <a href="*">Trayectoria Laboral</a>
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




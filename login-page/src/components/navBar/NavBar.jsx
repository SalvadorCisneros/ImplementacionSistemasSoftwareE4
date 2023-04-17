import React from 'react';
import './navBar.css';

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='logo-Container'>
        <img id="logo" src="TX_BIG.png" alt="Logo" />
      </div>
      <div className='navLink-Container'>
        <a href="*">Datos Personales</a>
        <a href="*">Cliente Provedor</a>
        <a href="*">Trayectoria Laboral</a>
        <a href="*">Menu</a>
        <a href="*">Cerrar Sesion</a>
      </div>
    </div>
  );
}




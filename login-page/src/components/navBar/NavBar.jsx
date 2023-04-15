import React from 'react'
import "./navBar.css"

export default function NavBar() {
  return (
    <div className='navBar'> 

      <div className='logo-Container'>
        <img id="logo" src="TX_BIG.png" alt="Logo" />
      </div>
      
 
      <div className='navLink-Container'>
        
        <a href="*">DATOS PERSONALES</a>
        <a href="*">CLIENTE PROVEEDOR</a>
        <a href="*">TRAYECTORIA LABORAL</a>
        <a href="*">MENÚ</a>
        <a href="*">CERRAR SESIÓN</a>
        
      </div>
    </div>
  )
}



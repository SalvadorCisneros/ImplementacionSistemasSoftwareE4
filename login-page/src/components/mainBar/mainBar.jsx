import React from 'react';
import './mainBar.css';
import { Link } from 'react-router-dom';

export default function MainBar() {
  return (
    <div className='mainBar'>
      <div className='logo-Container'>
        
        <img id="logo" src="TX_BIG.png" alt="Logo" />
        
        
      </div>
      <div className='mainLink-Container'>
         
          <Link to="/">
            <a href="*">Cerrar Sesion</a>
          </Link>
          
      </div>
    </div>
  );
}




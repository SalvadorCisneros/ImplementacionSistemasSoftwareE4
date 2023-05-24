import React from 'react';
import './mainBar.css';
import { Link , useNavigate } from 'react-router-dom';

export default function MainBar() {

  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    // Clear user session data
    localStorage.clear();
    // You can remove other session data if needed
    // Redirect the user to the login page
    navigate('/');
    window.location.reload();
  };

  return (
    <div className='mainBar'>
      <div className='logo-Container'>
        
        <img id="logo" src="TX_BIG.png" alt="Logo" />
        
        
      </div>
      <div className='mainLink-Container'>
        
            <a href="*" onClick={handleLogout} >Cerrar Sesion</a>         
      </div>
    </div>
  );
}




import React from 'react';
import './navBar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

  const isEmployee = localStorage.getItem('isEmployee') === 'true';
  const navigate = useNavigate();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

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
    <div className='navBar'>
        <div className='logo-Container'>
          <img id="logo" src={process.env.PUBLIC_URL + '/TX_BIG.png'}  alt="Logo" />
        </div>
        <div className='navLink-Container'>
        {isEmployee ? (
          <>
          <a href="*"></a>
          <a href="*"></a>
          <a href="*"></a>
          <Link to="/">
            <a href="*" onClick={handleLogout}>Cerrar Sesion</a>
          </Link>
          </> 
        ) : 
        (<>
          <a href="#DP" onClick={(e) => handleLinkClick(e, 'DP')}>Datos Personales</a>
          <a href="#CP" onClick={(e) => handleLinkClick(e, 'CP')}>Cliente Proveedor</a>
          <a href="#TL" onClick={(e) => handleLinkClick(e, 'TL')}>Trayectoria Laboral</a>
          <Link to="/main">
            <a href="*">Menu</a>
          </Link>
          <a href="*" onClick={handleLogout}>Cerrar Sesion</a>
          </> )} 
       </div>   
    </div>
  );
}





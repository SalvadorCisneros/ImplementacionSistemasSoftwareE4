import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';



function LoginPage() {

   
    return (
      <div className="container">
        <div className="square">
        <img id="logo" src="TX_BIG.png" alt="Logo" />
          <form>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <Link to="/main">
             <button type="submit">Iniciar sesión </button>
            </Link>
            
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
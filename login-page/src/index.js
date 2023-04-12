import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;




reportWebVitals();


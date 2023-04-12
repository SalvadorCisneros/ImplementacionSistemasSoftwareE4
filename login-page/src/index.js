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
    
    
    <div className='LoginBox'> 
     <img id= 'logo' src='https://upload.wikimedia.org/wikipedia/commons/8/83/Ternium_Logo.svg' />
      
    
      <form>
        <h1>Inicio de sesión</h1>
        <label>
          Correo electrónico:
          <input type="email" name="email" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;




reportWebVitals();

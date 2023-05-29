import React, { useState, useEffect } from 'react';
import './login.css';
import { Link , useParams, useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    fetch('http://localhost:5000/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
})
  .then(response => response.json())
  .then(data => {
    if (data.token && data.isAdmin) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAdmin', data.isAdmin);
      const locate = determineLocation(data.isAdmin, data.isEmployee, data.id_usuario);
      window.location.href = locate;
      
    }
    if (data.token && data.isEmployee !== undefined) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isEmployee', data.isEmployee);
      localStorage.setItem('idUsuario', data.id_usuario);
      const locate = determineLocation(data.isAdmin, data.isEmployee, data.id_usuario);
      window.location.href = locate;
      
    } else {
      toast.error( 
        <div className="popup">                                                                                                                                                                                                                                                                                                   
        <div className="popup-header">
          <h3>Datos invalidos</h3>
        </div>
        <p className="popup-message">El correo o la contraseña son invalidos</p>
        <button className="popup-button" onClick={() => toast.dismiss()}>
          OK
        </button>
      </div>,  {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,  
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: '#ffffff',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black"
        }
      });
    }
  })
  .catch(error => {
    // TODO: handle error
  });
  };

  const determineLocation = (isAdmin, isEmployee, id_usuario) => {
    if (isAdmin) {
      return '/main';
    } else if (isEmployee) {
      return `/profile/${id_usuario}`;
    }

  };

  useEffect(() => {
    const handleBrowserBack = () => {
      // Check if the user session data is present
      if (!localStorage.getItem('isEmployee')) {
        // Redirect the user to the login page
         navigate('/');    
      }
      if (!localStorage.getItem('isAdmin')) {
        // Redirect the user to the login page
         navigate('/');
      }
    };

    // Listen for browser back/forward navigation events
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', handleBrowserBack);

    return () => {
      // Clean up the event listener
      window.removeEventListener('popstate', handleBrowserBack);
    };
  }, []);
  

  return (
    <div className="container">
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      <div className="square">
      <img id="logo" src="TX_BIG.png" alt="Logo" />
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input  type="email" id="email" name="email"  value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>        
            <button type="submit" onClick={handleLogin}>Iniciar sesión </button>           
        </form>
      </div>
    </div>
  );
}
  
export default LoginPage;
import React, { useState } from 'react';
import './profileBox.css';
import { useLocation, useParams} from 'react-router-dom';
import PDF from '../pdf/pdf';


export default function ProfileBox() {
  const location = useLocation();
  const { id_usuario } = useParams();
  
  const [nombre, setNombre] = useState(location.state.nombre);
  const [apellido, setApellido] = useState(location.state.apellido);
  const [edad, setEdad] = useState(location.state.edad);


  const handleSubmit = () => {
    const updatedState = {
      id_usuario,
      nombre,
      apellido,
      edad,

    };
    console.log(id_usuario)
  
    fetch(`http://localhost:5000/datospersonales/${id_usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedState)
    })
    .then(response => {
      // TODO: handle successful response
    })
    .catch(error => {
      // TODO: handle error
    });
  };
  

  return (
    <div className="main-container">
      <button classname = "boton-guardar"onClick={handleSubmit}>Guardar</button>
      <div className="name-container">
        <h1 id="titulo">Ficha de empleado</h1>
      </div>
      <div className="second-container">
        <div className="profile-container">
          <img id="fotoPerfil" src="profile-picture.jpg" alt="Foto de Perfil" />
        </div>
        <div className="datos-container">
          <h2>Datos Personales</h2>
          <table>
            <tbody>
              <tr>
                <td>Nombre Completo:</td>
                <td>
                  <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                  <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>Edad:</td>
                <td><input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} /></td>

              </tr>
             
                
            </tbody>
          </table>
        </div>
      </div>

      <div className='opinions-container'>
        <h2>Cliente Proveedor</h2>
        <div className='client-text-container'>

        <p> <b>Año de Evaluacion: </b>{location.state.ano_evaluacion_anual}</p>
        <p> <b>Performance: </b>{location.state.performance}</p>
        <p> <b>Curva:</b> {location.state.curva}</p>
        <p> <b>Opiniones:</b>  {location.state.upward_feedback}</p>
        <p> <b>Promedio de Opinión:</b> {location.state.promedio_upward_feedback}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nota</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>{location.state.promedio_cliente_proveedor}</td>
                <td>{location.state.comentarios_cliente_proveedor}</td>

              </tr>
              <tr>
                <td>{location.state.puntuacion_comentarios}</td>
                <td>{location.state.comentarios_feedback}</td>
              </tr>
            
          </tbody>
        </table>
      </div>

      <div className='job-container'>
        <h2>Trayectoria Laboral</h2>
        <table>
          <thead>
            <tr>
              <th>Performance</th>
              <th>Key Talent</th>
              <th>Encuadre</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>{location.state.performance}</td>
                <td>{location.state.key_talent}</td>
                <td>{location.state.encuadre}</td>
              </tr>
           
          </tbody>
        </table>
      </div>

        <>
        <PDF/>
        </>
    </div>
  );
}

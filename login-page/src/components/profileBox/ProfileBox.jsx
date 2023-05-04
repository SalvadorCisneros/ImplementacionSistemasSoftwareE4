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
  const [telefono, setTelefono] = useState(location.state.telefono);
  const [antigüedad, setAntigüedad] = useState(location.state.antigüedad);
  const [universidad, setUniversidad] = useState(location.state.universidad);
  const [direccion, setDireccion] = useState(location.state.direccion);
  const [estudio, setEstudio] = useState(location.state.estudio);
  const [ano_evaluacion_anual, setAno_evaluacion_anual] = useState(location.state.ano_evaluacion_anual);
  const [performance, setPerformance] = useState(location.state.performance);
  const [curva, setCurva] = useState(location.state.curva);
  const [upward_feedback, setUpward_feedback] = useState(location.state.upward_feedback);
  const [promedio_upward_feedback, setPromedio_upward_feedback] = useState(location.state.promedio_upward_feedback);
  const [editMode, setEditMode] = useState(false);
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = () => {
    const updatedState = {
      id_usuario,
      nombre,
      apellido,
      edad,
      telefono,
      antigüedad,
      universidad,
      direccion,
      estudio,
      ano_evaluacion_anual,
      performance,
      curva,
      upward_feedback,
      promedio_upward_feedback,
      
      

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
    setEditMode(false);
  };
  

  return (
    <div className="main-container">
      {editMode ? (
        <button id = "boton-guardar" onClick={handleSubmit}>Guardar datos</button>
      ) : (
        <button id = "boton-modificar"onClick={handleEdit}>Modificar datos</button>
      )}
      <div className="name-container">
        <h1 id="titulo">Ficha de empleado</h1>
      </div>
      <div className="second-container">
        <div className="profile-container">
          <img id="fotoPerfil" src={process.env.PUBLIC_URL + '/profile-picture.jpg'} alt="Foto de Perfil" />
        </div>
        <div className="datos-container">
          <h2>Datos Personales</h2>
          <table>
            <tbody>
              <tr>
                <td>Nombre Completo:</td>
                {editMode ? (
                  <td id='inp_box'>
                    <input id='inp' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input id='inp' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                  </td>
                ) : (
                  <td>{nombre} {apellido}</td>
                )}
              </tr>
              <tr>
                <td>Edad:</td>
                {editMode ? (
                  <td id='inp_box'><input id='inp' type="text" value={edad} onChange={(e) => setEdad(e.target.value)} /></td>
                ) : (
                  <td>{edad}</td>
                )}
              </tr>
              <tr>
        <td>Antigüedad:</td>
        {editMode ? (
          <td id='inp_box'><input id='inp' type="text" value={antigüedad} onChange={(e) => setAntigüedad(e.target.value)} /></td>
        ) : (
          <td>{antigüedad}</td>
        )}
      </tr>
      <tr>
        <td>Universidad:</td>
        {editMode ? (
          <td id='inp_box'><input id='inp' type="text" value={universidad} onChange={(e) => setUniversidad(e.target.value)} /></td>
        ) : (
          <td>{universidad}</td>
        )}
      </tr>
      <tr>
        <td>Direccion:</td>
        {editMode ? (
          <td id='inp_box'><input id='inp' type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} /></td>
        ) : (
          <td>{direccion}</td>
        )}
      </tr>
      <tr>
        <td>Estudios:</td>
        {editMode ? (
          <td id='inp_box'><input id='inp' type="text" value={estudio} onChange={(e) => setEstudio(e.target.value)} /></td>
        ) : (
          <td>{estudio}</td>
        )}
      </tr>
      <tr>
        <td>Telefono:</td>
        {editMode ? (
          <td id='inp_box'><input id='inp' type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} /></td>
        ) : (
          <td>{telefono}</td>
        )}
      </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='opinions-container'>
        <h2>Cliente Proveedor</h2>
        <div className='client-text-container'>

        <p><b>Año Evaluacion Anual:</b> {editMode ? (
          <input id='inp' type="text" value={ano_evaluacion_anual} onChange={(e) => setAno_evaluacion_anual(e.target.value)} />
        ) : (
          ano_evaluacion_anual
        )}</p>
        <p><b>Performance:</b> {editMode ? (
          <input id='inp' type="text" value={performance} onChange={(e) => setPerformance(e.target.value)} />
        ) : (
          performance
        )}</p>
        <p><b>Curva:</b> {editMode ? (
          <input id='inp' type="text" value={curva} onChange={(e) => setCurva(e.target.value)} />
        ) : (
          curva
        )}</p>
        <p><b>Opiniones:</b> {editMode ? (
          <input id='inp' type="text" value={upward_feedback} onChange={(e) => setUpward_feedback(e.target.value)} />
        ) : (
          upward_feedback
        )}</p>
        <p><b>Promedio de Opinión:</b> {editMode ? (
          <input id='inp' type="text" value={promedio_upward_feedback} onChange={(e) => setPromedio_upward_feedback(e.target.value)} />
        ) : (
          promedio_upward_feedback
        )}</p>
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

        
    </div>
  );
}

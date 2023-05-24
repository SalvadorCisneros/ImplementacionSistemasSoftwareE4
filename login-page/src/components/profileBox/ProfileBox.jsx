import React, { useState, useEffect } from 'react';
import './profileBox.css';
import { useLocation, useParams} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import PDF from '../pdf/pdf';

import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import 'react-toastify/dist/ReactToastify.css';

export default function ProfileBox() {
  const location = useLocation();
  const { id_usuario } = useParams();
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [universidad, setUniversidad] = useState('');
  const [potencial, setPotencial] = useState('');
  const [direccion, setDireccion] = useState('');
  const [estudio, setEstudio] = useState('');
  const [ano_evaluacion_anual, setAno_evaluacion_anual] = useState('');
  const [performance, setPerformance] = useState('');
  const [curva, setCurva] = useState('');
  const [upward_feedback, setUpward_feedback] = useState('');
  const [promedio_upward_feedback, setPromedio_upward_feedback] = useState('');
  const [comentarios_cliente_proveedor, setComentarios_cliente_proveedor] = useState('');
  const [promedio_cliente_proveedor, setPromedio_cliente_proveedor] = useState('');
  const [puntuacion_comentarios, setPuntuacion_comentarios] = useState('');
  const [comentarios_feedback, setComentarios_feedback] = useState('');
  const [key_talent, setKey_talent] = useState('');
  const [encuadre, setEncuadre] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [downloadType, setDownloadType] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const isEmployee = localStorage.getItem('isEmployee') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    fetch(`http://localhost:5000/datospersonales/${id_usuario}`)
      .then(response => response.json())
      .then(data => {
        setProfileData(data[0]); // Se asume que solo hay un registro con el ID especificado
      })
      .catch(error => {
        console.error(error);
      });
  }, [id_usuario]);


  useEffect(() => {
    console.log(profileData)
    if (profileData) {
      // Asigna los valores correspondientes a cada variable
      setNombre(profileData.nombre);
      setApellido(profileData.apellido);
      setEdad(profileData.edad);
      setTelefono(profileData.telefono);
      setAntiguedad(profileData.antiguedad);
      setUniversidad(profileData.universidad);
      setPotencial(profileData.potencial);
      setDireccion(profileData.direccion);
      setEstudio(profileData.estudio);
      setAno_evaluacion_anual(profileData.ano_evaluacion_anual);
      setPerformance(profileData.performance);
      setCurva(profileData.curva);
      setUpward_feedback(profileData.upward_feedback);
      setPromedio_upward_feedback(profileData.promedio_upward_feedback);
      setComentarios_cliente_proveedor(profileData.comentarios_cliente_proveedor);
      setPromedio_cliente_proveedor(profileData.promedio_cliente_proveedor);
      setPuntuacion_comentarios(profileData.puntuacion_comentarios);
      setComentarios_feedback(profileData.comentarios_feedback);
      setPerformance(profileData.performance);
      setKey_talent(profileData.key_talent);
      setEncuadre(profileData.encuadre);
    }
  }, [profileData]);
  

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleDismiss = () => {
    setShowPdf(false);
    setDownloadType(null);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChangeProfilePicture = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  };

  

  const handleSubmit = () => {
    
   
    const updatedState = {
      id_usuario,
      nombre,
      apellido,
      edad,
      telefono,
      potencial,
      antiguedad,
      universidad,
      direccion,
      estudio,
      ano_evaluacion_anual,
      performance,
      curva,
      upward_feedback,
      promedio_upward_feedback,
      comentarios_cliente_proveedor,
      promedio_cliente_proveedor,
      puntuacion_comentarios,
      comentarios_feedback,
      key_talent,
      encuadre
    };
    
  
    fetch(`http://localhost:5000/datospersonales/${id_usuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedState)
    })
    .then(response => {
      toast.success( 
        <div className="popup">
        <div className="popup-header">
          <h3>¡Cambios de datos exitosos!</h3>
        </div>
        <p className="popup-message">Los datos se han cambiado de manera exitosa.</p>
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
      // TODO: handle successful response
    })
    .catch(error => {
      // TODO: handle error
    });
    setEditMode(false);
  };
  
  

  return (
    <div className="main-container">
      {isAdmin && (
        editMode ? (
          <button id = "boton-guardar" onClick={handleSubmit}>Guardar datos</button>
        ) : (
          <button id = "boton-modificar"onClick={handleEdit}>Modificar datos</button>
        )
      )}

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

       
      <div className="name-container">
        <h1 id="titulo">Ficha de empleado</h1>
      </div>
      <div className="second-container">
      <div className="profile-container">
      <div className="profile-picture">
        <div className="profile-image-wrapper">
          <img id="fotoPerfil" src={process.env.PUBLIC_URL + '/profile-picture.jpg'} alt="Foto de Perfil" />
          <div className="camera-button">
            <input type="file" onChange={handleChangeProfilePicture} />
            <i className="fa fa-camera"></i>
          </div>
        </div>
      </div>
    </div>
    {isEmployee ? (
      <>
          <div className="datos-container">
            <h2 id='DP'>Datos Personales</h2>
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
            <td id='inp_box'><input id='inp' type="text" value={antiguedad} onChange={(e) => setAntiguedad(e.target.value)} /></td>
          ) : (
            <td>{antiguedad}</td>
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
        
      </> ) : (
        <>
          <div className="datos-container">
            <h2 id='DP'>Datos Personales</h2>
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
            <td id='inp_box'><input id='inp' type="text" value={antiguedad} onChange={(e) => setAntiguedad(e.target.value)} /></td>
          ) : (
            <td>{antiguedad}</td>
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

        <div className='opinions-container'>
          <h2 id='CP'>Cliente Proveedor</h2>
          <div className='client-text-container'>

          <p><b>Año Evaluacion Anual:</b> {editMode ? (
            
            <input id='inp' type="text" value={ano_evaluacion_anual} onChange={(e) => setAno_evaluacion_anual(e.target.value)} />
          ) : (
            ano_evaluacion_anual
          )}</p>
          <p><b>Potencial:</b> {editMode ? (
            <input id='inp' type="text" value={potencial} onChange={(e) => setPotencial(e.target.value)} />
          ) : (
            potencial
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
              <td>{editMode ? (
                <input id='inp' type="text" value={comentarios_cliente_proveedor} onChange={(e) => setComentarios_cliente_proveedor(e.target.value)} />
              ) : (
                comentarios_cliente_proveedor
              )}</td>
              <td>{editMode ? (
                <input id='inp' type="text" value={promedio_cliente_proveedor} onChange={(e) => setPromedio_cliente_proveedor(e.target.value)} />
              ) : (
                promedio_cliente_proveedor
              )}</td>
              </tr>
              <tr>
              <td>{editMode ? (
                <input id='inp' type="text" value={puntuacion_comentarios} onChange={(e) => setPuntuacion_comentarios(e.target.value)} />
              ) : (
                puntuacion_comentarios
              )}</td>
              <td>{editMode ? (
                <input id='inp' type="text" value={comentarios_feedback} onChange={(e) => setComentarios_feedback(e.target.value)} />
              ) : (
                comentarios_feedback
              )}</td>
              </tr>
            
          </tbody>
        </table>
      </div>

      <div className='job-container'>
        <h2 id='TL'>Trayectoria Laboral</h2>
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
              <td>{editMode ? (
                <input id='inp' type="text" value={performance} onChange={(e) => setPerformance(e.target.value)} />
              ) : (
                performance
              )}</td>
              <td>{editMode ? (
                <input id='inp' type="text" value={key_talent} onChange={(e) => setKey_talent(e.target.value)} />
              ) : (
                key_talent
              )}</td>
              <td>{editMode ? (
                <input id='inp' type="text" value={encuadre} onChange={(e) => setEncuadre(e.target.value)} />
              ) : (
                encuadre
              )}</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className='pdfContainer'>
    <button className="pdf-button" onClick={handleShowPdf}>
      {showPdf ? 'Descargar ficha de empleado' : 'Visualizar ficha de empleado'}
    </button>
    {showPdf && (
      <div className="pdf-overlay">
        <div className="pdf-wrapper">
          <button className="pdf-close-button" onClick={handleDismiss}>Cerrar</button>
          <PDF downloadType={downloadType} />
        </div>
      </div>
    )}
    {showPdf && (
      <div className="pdf-download-options">
        <select>
          <option value="pdf">Descargar como PDF</option>
          <option value="excel">Descargar como Excel</option>
        </select>
      </div>
    )}
    
    </div>
    </>
    )}
  
    </div>
    </div>
  )
}

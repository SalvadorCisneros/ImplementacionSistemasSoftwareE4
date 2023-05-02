import React from 'react';
import "./profileBox.css";
import { useLocation } from 'react-router-dom';
import PDF from '../pdf/pdf';


function convertir_a_input() {
  // Obtener el elemento
  var titulo = document.getElementById("titulo");

  // Crear un input y establecer sus atributos
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", titulo.innerHTML);

  // Reemplazar el elemento  con el input
  titulo.parentNode.replaceChild(input, titulo);
}

function convertir_a_texto() {
  // Obtener el elemento 
  var titulo = document.getElementById("titulo");

  // Crear texto y establecer sus atributos
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", titulo.innerHTML);

  // Reemplazar el elemento input con el texto
  titulo.parentNode.replaceChild(input, titulo);
}


export default function ProfileBox({profile, firstName, lastName}) {
  const location = useLocation();




  return (
    
    <div className='main-container'>
      <div className='name-container'>
        <h1>Ficha de empleado</h1>
      </div>
      <div className='second-container'>
        <div className='profile-container'>
          <img id="fotoPerfil" src="profile-picture.jpg" alt="Foto de Perfil" />
        </div>
        <div className='datos-container'>
          <h2>Datos Personales</h2>
          <table>
            <tbody>
            <tr>
                <td>Nombre Completo:</td>
                <td>{location.state.nombre} {location.state.apellido}</td>
              </tr>
              <tr>
                <td>Edad:</td>
                <td>{location.state.edad}</td>
              </tr>
              <tr>
                <td>Telefono:</td>
                <td>{location.state.telefono}</td>
              </tr>
              <tr>
                <td>Estudio:</td>
                <td>{location.state.estudio}</td>
              </tr>
              <tr>
                <td>Dirección:</td>
                <td>{location.state.direccion}</td>
              </tr>
              <tr>
                <td>Universidad:</td>
                <td>{location.state.universidad}</td>
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

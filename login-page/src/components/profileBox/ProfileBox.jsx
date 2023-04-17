import React from 'react';
import "./profileBox.css";

export default function ProfileBox() {
  return (
    <div className='main-container'>
      <div className='name-container'>
        <h1>Pedro Ramirez Flores</h1>
      </div>
      <div className='second-container'>
        <div className='profile-container'>
          <img id="fotoPerfil" src="profile-sample.png" alt="Foto de Perfil" />
          <input type="text" id="comentario" placeholder='Comentarios' />
        </div>
        <div className='datos-container'>
          <h2>Datos Personales</h2>
          <ul>
            <li><h3>Edad:</h3></li>
            <li><h3>Antiguedad:</h3></li>
            <li><h3>Estudios:</h3></li>
            <li><h3>Puesto:</h3></li>
            <li><h3>CET:</h3></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

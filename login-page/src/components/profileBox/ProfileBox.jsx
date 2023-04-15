import React from 'react'
import "./profileBox.css"

export default function ProfileBox() {
  return (
    <div className='main-Container'>
      <div className='name-Container'>
        <h1>Pedro Ramirez Flores</h1>
      </div>
      <div className='second-Container'>
        <div className='profile-Container'>
          <img id="fotoPerfil" src="profile-sample.png" alt="Foto de Perfil" />
        </div>
        <div className='datos-Container'>
          <h2>Datos Personales</h2>
          <h3>Edad:</h3>
          <h3>Antiguedad:</h3>
          <h3>Estudios:</h3>
          <h3>Puesto:</h3>
          <h3>CET:</h3>
        </div>
      </div>
    </div>
  )
}

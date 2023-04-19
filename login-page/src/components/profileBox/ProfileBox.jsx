import React from 'react';
import "./profileBox.css";
import { rows } from '../mainTable/mainTable';
import { useLocation } from 'react-router-dom';


export default function ProfileBox({profile, firstName, lastName}) {
  const location = useLocation();

  
  
  const user = {
    name: "Pedro Ramirez Flores",
    age: 30,
    email: "pedro.ramirez@gmail.com",
    phone: "555-555-5555",
    opinions: 15,
    opinionsAverage: 4.5,
    comments: [
      {id: 1, rating: 5, text: "Excelente desempeño en su trabajo"},
      {id: 2, rating: 3, text: "Puede mejorar en la puntualidad"},
      {id: 3, rating: 4, text: "Muy amable con los clientes"},
    ],
    jobs: [
      {id: 1, date: "2020-2023", company: "Empresa A", position: "Gerente de Ventas"},
      {id: 2, date: "2018-2020", company: "Empresa B", position: "Supervisor de Ventas"},
      {id: 3, date: "2016-2018", company: "Empresa C", position: "Asesor de Ventas"},
    ],
  };

  return (
    
    <div className='main-container'>
      <div className='name-container'>

        <h1>{location.state.firstName} {location.state.lastName} </h1>
      </div>
      <div className='second-container'>
        <div className='profile-container'>
          <img id="fotoPerfil" src="profile-sample.png" alt="Foto de Perfil" />
        </div>
        <div className='datos-container'>
          <h2>Datos Personales</h2>
          <table>
            <tbody>
              <tr>
                <td>Edad:</td>
                <td>{location.state.age}</td>
              </tr>
              <tr>
                <td>Correo electrónico:</td>
                <td>{location.state.email}</td>
              </tr>
              <tr>
                <td>Teléfono:</td>
                <td>{location.state.tel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='opinions-container'>
        <h2>Cliente Proveedor</h2>
        <p>Opiniones: {user.opinions}</p>
        <p>Promedio de Opinión: {user.opinionsAverage}</p>
        <table>
          <thead>
            <tr>
              <th>Nota</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {user.comments.map(comment => (
              <tr key={comment.id}>
                <td>{comment.rating}</td>
                <td>{comment.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='job-container'>
        <h2>Trayectoria Laboral</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Empresa</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            {user.jobs.map(job => (
              <tr key={job.id}>
                <td>{job.date}</td>
                <td>{job.company}</td>
                <td>{job.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

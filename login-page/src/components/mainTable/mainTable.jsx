import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./mainTable.css"
import { useNavigate,useParams } from "react-router-dom";

const columns = [
  { field: 'id_usuario', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'apellido', headerName: 'Apellido', width: 130 },
  {
    field: 'antigüedad',
    headerName: 'Antiguedad',
    type: 'char',
    width: 130,
  },
  
  {
    field: 'edad',
    headerName: 'Edad',
    type: 'number',
    width: 90,
  },
  {
    field: 'direccion', 
    headerName: 'Direccion',
    type: 'char',
    width: 130,
  },
  {
    field: 'estudio',
    headerName: 'Estudios',
    type: 'char',
    width: 130,
  },
  {
    field: 'telefono',
    headerName: 'Telephone',
    type: 'char',
    width: 130,
  },
  {
    field: 'universidad',
    headerName: 'Universidad',
    type: 'char',
    width: 130,
  },
  {
    field: 'estructura_3',
    headerName: 'Estructura 3',
    type: 'char',
    width: 130,
  },
  {
    field: 'estructura_4',
    headerName: 'Estructura 4',
    type: 'char',
    width: 130,
  },
  {
    field: 'estructura_5',
    headerName: 'Estructura 5',
    type: 'char',
    width: 130,
  },

  {
    field: 'ano_evaluacion_anual',
    headerName: 'Año Evaluacion Anual',
    type: 'string',
    width: 130,
  },
  {
    field: 'curva',
    headerName: 'Curva',
    type: 'string',
    width: 130,
  },
  {
    field: 'upward_feedback',
    headerName: 'Upward Feedback',
    type: 'number',
    width: 90,
  },
  {
    field: 'promedio_upward_feedback',
    headerName: 'Promedio UF (Upward Feedback)',
    type: 'number',
    width: 110,
  },
  {
    field: 'promedio_cliente_proveedor',
    headerName: 'Promedio CP (Cliente Proveedor)',
    type: 'number',
    width: 110,
  },
  {
    field: 'puntuacion_comentarios',
    headerName: 'Puntuacion Comentarios',
    type: 'number',
    width: 90,
  },
  {
    field: 'performance',
    headerName: 'Performance',
    type: 'number',
    width: 90,
  },
  
  {
    field: 'key_talent',
    headerName: 'Key Talent',
    type: 'number',
    width: 90,
  },
  {
    field: 'encuadre',
    headerName: 'Encuadre',
    type: 'number',
    width: 90,
  },

  {
    field: 'fullName',
    headerName: 'Nombre Completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.nombre|| ''} ${params.row.apellido || ''}`,
  },
];

export default function DataTable() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/datospersonales')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRows(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  
 
  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    
    <div className='tabla' style={{ height: 600, width: '100%' }} >
      
      <DataGrid getRowId={(row) => row.id_usuario}
      
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
        onRowDoubleClick={(params) => navigate(`/profile/${params.row.id_usuario}`, {
          state: {
            id_usuario:params.row.id_usuario,
            nombre: params.row.nombre,
            apellido: params.row.apellido,
            edad: params.row.edad,
            telefono: params.row.telefono,
            antigüedad: params.row.antigüedad,
            universidad: params.row.universidad,
            direccion: params.row.direccion,
            estudio: params.row.estudio,  
            potencial: params.row.potencial,
            ano_evaluacion_anual: params.row.ano_evaluacion_anual,
            curva: params.row.curva,
            upward_feedback: params.row.upward_feedback,
            promedio_upward_feedback: params.row.promedio_upward_feedback,
            comentarios_cliente_proveedor: params.row.comentarios_cliente_proveedor,
            promedio_cliente_proveedor: params.row.promedio_cliente_proveedor,
            puntuacion_comentarios: params.row.puntuacion_comentarios,
            comentarios_feedback: params.row.comentarios_feedback,
            performance: params.row.performance,
            key_talent: params.row.key_talent,
            encuadre: params.row.encuadre,
           
            
          }
        })}
      />
      {selectionModel.map((val) => (
        <h1>{val}</h1>
      ))}
    </div>
  );
}

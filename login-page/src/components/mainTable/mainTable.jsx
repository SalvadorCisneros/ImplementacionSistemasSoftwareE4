import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./mainTable.css"
import { useNavigate } from "react-router-dom";

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
    headerName: 'Estructura3',
    type: 'char',
    width: 130,
  },
  {
    field: 'estructura_4',
    headerName: 'Estructura2',
    type: 'char',
    width: 130,
  },
  {
    field: 'estructura_5',
    headerName: 'Estructura3',
    type: 'char',
    width: 130,
  },

  {
    field: 'fullName',
    headerName: 'Full name',
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

  console.log(rows)
 
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
        onRowDoubleClick={(params) => navigate("/profile", {
          state: {
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            age: params.row.age,
            tel: params.row.tel,
            email: params.row.email
          }
        })}
      />
      {selectionModel.map((val) => (
        <h1>{val}</h1>
      ))}
    </div>
  );
}

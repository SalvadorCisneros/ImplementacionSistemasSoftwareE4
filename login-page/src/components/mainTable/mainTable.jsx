import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./mainTable.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'tel',
    headerName: 'Telephone',
    type: 'char',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Correo',
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
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, tel: 8126433820, email: 'jon@ternium.com.mx' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, tel: 8126433820, email: 'Cersei@ternium.com.mx' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, tel: 8143543534, email: 'Jaime@ternium.com.mx' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, tel: 8199255412, email: 'Arya@ternium.com.mx' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, tel: 8126433820, email: 'Daenerys@ternium.com.mx' },
  { id: 6, lastName: 'Melisandre', firstName: 'Luis', age: 150, tel: 8121544524, email: 'Luis@ternium.com.mx'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, tel: 8184455212, email: 'Ferrara@ternium.com.mx' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, tel: 8112544114, email: 'Rossini@ternium.com.mx' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 6, tel: 8153453453, email: 'Harvey@ternium.com.mx' },
];


export let activeID
 

export default function DataTable() {
  const navigate = useNavigate();
  const [selectionModel, setSelectionModel] = React.useState([]);
  
  return (
    
    <div className='tabla' style={{ height: 600, width: '100%' }}>
      <DataGrid
       
        rows={rows} 
        
        
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}  
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
        
        
        
        onRowDoubleClick={(params) => navigate("/profile" , 
        {state:
          {

          firstName:params.row.firstName, 
          lastName:params.row.lastName,
          age:params.row.age, 
          tel:params.row.tel,
          email:params.row.email
        
        }})}
        
      />
      {selectionModel.map((val) => (
        <h1>{val}</h1>
      ))}
    </div>
  );
}



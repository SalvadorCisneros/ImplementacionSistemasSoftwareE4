import { DataGrid, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import "./mainTable.css"
import * as XLSX from 'xlsx';
import clsx from 'clsx';
import { useNavigate, useParams } from "react-router-dom";
import PDFDocument from "../pdf/PDFDocument";
import JSZip from "jszip";
import { pdf } from "@react-pdf/renderer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function MainTable() {
  const [checkedRows, setCheckedRows] = useState([]);
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [excelRows, setExcelRows] = useState([]);
  const [excelRows2, setExcelRows2] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadExcelData(file);
    }
  };
  
  const uploadExcelData = (file) => {
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      setExcelRows(excelRows); // Set the excelRows state variable
    };
  
    reader.readAsArrayBuffer(file);
  };
  

  const handleUpload = () => {
    const requestBody = {
      rows: excelRows.slice(1).map((row) => ({
        id_usuario: row[0],
        correo_ternium: row[1],
        contrasena: row[2]
      }))
    };
  
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success( 
          <div className="popup">
          <div className="popup-header">
            <h3>¡Los datos se actualizaron correctamente!</h3>
          </div>
          <p className="popup-message">Los datos se actualizaron de manera exitosa.</p>
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
      })
      .catch((error) => {
        toast.error( 
          <div className="popup">
          <div className="popup-header">
            <h3>¡Lo sentimos a ocurrido un error!</h3>
          </div>
          <p className="popup-message"> {error }</p>
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
      });
  };


  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadExcelData2(file);
    }
  };
  
  const uploadExcelData2 = (file) => {
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelRows2 = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      setExcelRows2(excelRows2); // Set the excelRows2 state variable
    };
  
    reader.readAsArrayBuffer(file);
  };
  
  // ...
  
  const handleUpload2 = () => {
    const requestBody = {
      datosPersonales: excelRows2.slice(1).map((row) => ({
        id_usuario: row[0],
        nombre: row[1],
        apellido: row[2],
        antiguedad: row[3],
        edad: row[4],
        direccion: row[5],
        estudio: row[6],
        telefono: row[7],
        universidad: row[8],
        estructura_3: row[9],
        estructura_4: row[10],
        estructura_5: row[11],
      })),
      clienteProveedor: excelRows2.slice(1).map((row) => ({
        id_usuario: row[0],
        ano_evaluacion_anual: row[12],
        potencial: row[13],
        curva: row[14],
        upward_feedback: row[15],
        promedio_upward_feedback: row[16],
        comentarios_cliente_proveedor: row[17],
        promedio_cliente_proveedor: row[18],
        puntuacion_comentarios: row[19],
        comentarios_feedback: row[20],
      })),
      trayectoriaLaboral: excelRows2.slice(1).map((row) => ({
        id_usuario: row[0],
        performance: row[21],
        key_talent: row[22],
        encuadre: row[23],
      })),
    };
  
    fetch("http://localhost:5000/empleados", {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify(requestBody),
})
.then((response) => {
  if (!response.ok) {
    throw new Error("Error en la respuesta del servidor");
  }
  return response.json();
})
.then((data) => {
  toast.success(
    <div className="popup">
      <div className="popup-header">
        <h3>¡Los datos se actualizaron correctamente!</h3>
      </div>
      <p className="popup-message">Los datos se actualizaron de manera exitosa.</p>
      <button className="popup-button" onClick={() => toast.dismiss()}>
        OK
      </button>
    </div>,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      },
    }
  );
})
.catch((error) => {
  console.log(error);
  toast.error(
    <div className="popup">
      <div className="popup-header">
        <h3>¡Lo sentimos a ocurrido un error!</h3>
      </div>
      <p className="popup-message"> {error.message}</p>
      <button className="popup-button" onClick={() => toast.dismiss()}>
        OK
      </button>
    </div>,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      },
    }
  );
});
  }
  const handleAddEmployee = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogDismiss = () => {
    setIsDialogOpen(false);
    // Additional code to dismiss the dialog and return to the main screen
  };
  
  
  useEffect(() => {
    const newCheckedRows = rows.filter((row) => row.selected);
    setCheckedRows(newCheckedRows);
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

  const handleChange = (datos) => {
    const index = rows.findIndex((row) => row.id_usuario === datos);
    const newRows = [...rows];
    newRows[index].selected = !newRows[index].selected;
    const newCheckedRows = newRows.filter((row) => row.selected);
    setCheckedRows(newCheckedRows);
    console.log("IDs de usuarios seleccionados:");
    newCheckedRows.forEach((datos) => console.log(datos));
    

    
  };

  const handleZipDownload = async () => {
    const zip = new JSZip();

    const promises = checkedRows.map((row) => {
      return pdf(<PDFDocument id_usuario={row.id_usuario} nombre={row.nombre} apellido={row.apellido} edad={row.edad} telefono={row.telefono} antiguedad={row.antiguedad} universidad={row.universidad} direccion={row.direccion} estudio={row.estudio} potencial={row.potencial} ano_evaluacion_anual={row.ano_evaluacion_anual} curva={row.curva} upward_feedback={row.upward_feedback} promedio_upward_feedback={row.promedio_upward_feedback} comentarios_cliente_proveedor={row.comentarios_cliente_proveedor} promedio_cliente_proveedor={row.promedio_cliente_proveedor} puntuacion_comentarios={row.puntuacion_comentarios} comentarios_feedback={row.comentarios_feedback} performance={row.performance} key_talent={row.key_talent} encuadre={row.encuadre}/>).toBlob();  
    });

      const blobs = await Promise.all(promises);

    for (let i = 0; i < blobs.length; i++) {
      const { id_usuario } = checkedRows[i];
      const blob = blobs[i];
      const filename = `EmpleadoTernium_${id_usuario}.pdf`;
      zip.file(filename, blob);
    }
    const content = await zip.generateAsync({ type: "blob" });

    const anchor = document.createElement("a");
    anchor.download = "SeleccionEmpleadosTernium.zip";
    anchor.style.display = "none";
    anchor.href = URL.createObjectURL(content);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  

  const columns = [
    {
      field: "selected",
      headerName: <img src="check.png" alt="check" style={{display:"flex",justifyContent: "center",paddingLeft: "3px", maxWidth: '24px', height: 'auto'}}/>,
      width: 65,
      renderCell: (params) => (
        <div className="checkbox">
          <input id="check"
            type="checkbox"
            checked={params.row.selected}
            onChange={() => handleChange(params.row.id_usuario)}
          />
        </div>
        
        
      )
      
    },
    { field: 'id_usuario', headerName: 'ID', width: 70 },
      { field: 'nombre', headerName: 'Nombre', width: 130 },
      { field: 'apellido', headerName: 'Apellido', width: 130 },
      {
        field: 'antiguedad',
        headerName: 'Antiguedad',
        type: 'date',
        width: 130,
        valueGetter: (params) => new Date(params.value),
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
        type: 'string',
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
        field: 'potencial',
        headerName: 'Potencial',
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
        type: 'float',
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
        type: 'string',
        width: 90,
        cellClassName: (params) => {
          if (params.value == null) {
            return '';
          }
    
          return clsx('key', {
            s: params.value === "Si",
            n: params.value === "No",
          });
        },
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
    


    return (
      
      <div className="tabla">
        <div className="btn-container">
        <Button variant="contained" onClick={handleAddEmployee}>
        Añadir empleado
      </Button>
        
        <Button variant = "contained" onClick={handleZipDownload}>
          Descargar fichas de empleado
        </Button>
        </div>
    <Dialog open={isDialogOpen} onClose={handleDialogClose}>
    <DialogTitle className="dialog-title">Añadir empleado</DialogTitle>
    <div className="dialog-line"></div>
    <DialogContent>
    <div className="dialog-upload">
      <div className="dialogCont">
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
        
      <div className="dialogCont">
      <input type="file" accept=".xlsx,.xls" onChange={handleFileChange2} />
        <button onClick={handleUpload2}>Upload</button>
      </div>
        
        </div>
    
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
        
        

        
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogDismiss}>Salir</Button>
    </DialogActions>
  </Dialog>
        <DataGrid
          getRowId={(row) => row.id_usuario}
          slots={{ toolbar: GridToolbar, className: "barra" }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          headerAlign={"center"}
          align={"center"}
          
          
          
          getCellClassName={(params) => {
            if (params.field === "key_talent" || params.value == null) {
              return "";
            }
            return params.value === "Si" ? "Si" : "No";
          }}
          
          hasMultipleFilters={true}
          onRowDoubleClick={(params) =>
            navigate(`/profile/${params.row.id_usuario}`, {
              state: {
                id_usuario: params.row.id_usuario,
                nombre: params.row.nombre,
                apellido: params.row.apellido,
                edad: params.row.edad,
                telefono: params.row.telefono,
                antiguedad: params.row.antiguedad,
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
              },
            })
          }
          components={{
            Toolbar: () => (
              <div>
                <GridToolbar />
                <span>{`IDs seleccionados: ${checkedRows.join(", ")}`}</span>
              </div>
            ),
          }}
          renderCell={(params) => (
            <div className="checkbox">
              <input
                id="check"
                type="checkbox"
                checked={params.row.selected}
                onChange={() => handleChange(params.row.id_usuario)}  
              />
            </div>
          )}
        />
        
      </div>
    );
  };

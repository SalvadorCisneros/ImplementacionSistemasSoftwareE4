  import { DataGrid, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
  import { useState, useEffect } from "react";
  import "./mainTable.css"
  import clsx from 'clsx';
  import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
  import { saveAs } from 'file-saver';
  import { useNavigate,useParams } from "react-router-dom";
  import PDF from "../pdf/pdf2";


  export default function MainTable() {
    const [checkedRows, setCheckedRows] = useState([]);
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

    function PDFDownload({ data }) {
      return (
        <PDFDownloadLink document={<PDF data={data} />} fileName="usuarios.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Generando PDF..." : "Descargar PDF"
          }
        </PDFDownloadLink>
      );
    }

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

    const handleChange = (id) => {
      const index = rows.findIndex((row) => row.id_usuario === id);
      const newRows = [...rows];
      newRows[index].selected = !newRows[index].selected;
      const newCheckedRows = newRows.filter((row) => row.selected);
      setCheckedRows(newCheckedRows);
      console.log("IDs de usuarios seleccionados:");
      newCheckedRows.forEach((id) => console.log(id));
      
      <PDF data={newCheckedRows} />

      
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
        
        <div className="tabla" style={{ width: "100%" }}>
          
          <div><button onClick={PDFDownload}>Descargar PDF</button></div>
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
            rowsPerPageOptions={[5]}
            
            getCellClassName={(params) => {
              if (params.field === "key_talent" || params.value == null) {
                return "";
              }
              return params.value === "Si" ? "Si" : "No";
            }}
            pagination={true}
            hasMultipleFilters={true}
            onRowDoubleClick={(params) =>
              navigate(`/profile/${params.row.id_usuario}`, {
                state: {
                  id_usuario: params.row.id_usuario,
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

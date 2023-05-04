const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")


app.use(cors())
app.use(express.json())

app.get("/datospersonales", async(req,res) => {
    try{
       
        const allDatos = await pool.query("SELECT * FROM datospersonales FULL OUTER JOIN clienteproveedor ON datospersonales.id_usuario = clienteproveedor.id_usuario FULL OUTER JOIN trayectorialaboral ON datospersonales.id_usuario = trayectorialaboral.id_usuario")
         res.json(allDatos.rows);
    } catch(err){
        console.error(err.message)
    }
})

app.put("/datospersonales/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, edad, telefono, estudio, direccion, universidad , ano_evaluacion_anual } = req.body;
  
      const updateDatosPersonales = await pool.query(
        "UPDATE datospersonales SET nombre = $1, apellido = $2, edad = $3, telefono = $4, estudio = $5, direccion = $6, universidad = $7 WHERE id_usuario = $8",
        [nombre, apellido, edad, telefono, estudio, direccion, universidad, id]
        );

      const updateClienteProveedor = await pool.query(
        "UPDATE clienteproveedor SET ano_evaluacion_anual= $1 WHERE id_usuario = $2",
        [ano_evaluacion_anual, id]
      );
  
      res.json(updateDatosPersonales.rows[0]);
      res.json(updateClienteProveedor.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  



app.listen(5000, () => {
    console.log("server has started on port 5000")
})
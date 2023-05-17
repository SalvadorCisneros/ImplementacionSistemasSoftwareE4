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
  


  app.post("/upload", (req, res) => {
    try {
      const { rows } = req.body;
  
      const insertUsuariosPromises = rows.map((row) => {
        const { id_usuario, correo_ternium, contrasena } = row;
        return pool.query(
          "INSERT INTO usuarios(id_usuario, correo_ternium, contrasena) VALUES ($1, $2, $3)",
          [id_usuario, correo_ternium, contrasena]
        );
      });
  
      const insertEmpleadosPromises = rows.map((row) => {
        const { id_usuario } = row;
        return pool.query(
          "INSERT INTO empleados(id_usuario) VALUES ($1)",
          [id_usuario]
        );
      });
  
      Promise.all([...insertUsuariosPromises, ...insertEmpleadosPromises])
        .then(() => {
          res.json({ message: "Data inserted successfully" });
        })
        .catch((error) => {
          console.error("Error inserting data:", error);
          res.status(500).json({ error: "Error inserting data" });
        });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(400).json({ error: "Error processing request" });
    }
  });
  
 
  
  app.post("/empleados", async (req, res) => {
    const { datosPersonales, clienteProveedor, trayectoriaLaboral } = req.body;
  
    try {
      await pool.query("BEGIN"); // Inicia la transacción
  
  
      if (Array.isArray(datosPersonales)) {
        for (const row of datosPersonales) {
          const { id_usuario, nombre, apellido, antiguedad, edad, direccion, estudio, telefono, universidad, estructura_3, estructura_4, estructura_5 } = row;
          await pool.query(
            "INSERT INTO datospersonales (id_usuario, nombre, apellido, antiguedad, edad, direccion, estudio, telefono, universidad, estructura_3, estructura_4, estructura_5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
            [id_usuario, nombre, apellido, antiguedad, edad, direccion, estudio, telefono, universidad, estructura_3, estructura_4, estructura_5]
          );
        }
      }
  
      if (Array.isArray(clienteProveedor)) {
        for (const row of clienteProveedor) {
          const { id_usuario, ano_evaluacion_anual,potencial, curva, upward_feedback, promedio_upward_feedback, comentarios_cliente_proveedor, promedio_cliente_proveedor, puntuacion_comentarios, comentarios_feedback } = row;
          await pool.query(
            "INSERT INTO clienteproveedor (id_usuario, ano_evaluacion_anual, potencial, curva, upward_feedback, promedio_upward_feedback, comentarios_cliente_proveedor, promedio_cliente_proveedor, puntuacion_comentarios, comentarios_feedback) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [id_usuario, ano_evaluacion_anual,potencial, curva, upward_feedback, promedio_upward_feedback, comentarios_cliente_proveedor, promedio_cliente_proveedor, puntuacion_comentarios, comentarios_feedback]
          );
        }
      }
  
      if (Array.isArray(trayectoriaLaboral)) {
        for (const row of trayectoriaLaboral) {
          const { id_usuario, performance, key_talent, encuadre } = row;
          await pool.query(
            "INSERT INTO trayectorialaboral (id_usuario, performance, key_talent, encuadre) VALUES ($1, $2, $3, $4)",
            [id_usuario, performance, key_talent, encuadre]
          );
        }
      }
  
      await pool.query("COMMIT"); // Commit the transaction
    res.json({ message: "Datos guardados correctamente" });
  } catch (error) {
    await pool.query("ROLLBACK"); // Rollback the transaction in case of error
    console.error(error.message);
    res.status(500).json({ error: "Error al guardar los datos" });
  } // Release the client back to the pool
  
});
  
  
  
  
  
  
    

app.listen(5000, () => {
    console.log("server has started on port 5000")
})
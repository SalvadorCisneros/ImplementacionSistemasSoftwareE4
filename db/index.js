const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const jwt = require("jsonwebtoken")


app.use(cors())
app.use(express.json())

app.get("/usuarios", async(req,res) => {
  try{
     
      const allDatos = await pool.query("SELECT * FROM usuarios")
       res.json(allDatos.rows);
  } catch(err){
      console.error(err.message)
  }
})

app.post('/usuarios', async(req, res) => {

  try {
    const { email, password} = req.body;

    const result = await pool.query(
      `SELECT u.id_usuario, u.correo_ternium, a.id_usuario AS is_admin, e.id_usuario AS is_employee
      FROM usuarios u
      LEFT JOIN administradores a ON u.id_usuario = a.id_usuario
      LEFT JOIN empleados e ON u.id_usuario = e.id_usuario
      WHERE u.correo_ternium = $1 AND u.contrasena = $2`,
      [email, password]
    );

    const user = result.rows[0];

    if (user) {
      // user is authenticated, send a JWT token back to the client
      const isAdmin = user.is_admin !== null;
      const isEmployee = user.is_employee !== null;
      const id_usuario = user.id_usuario;
      const token = jwt.sign({ email: email ,id_usuario: id_usuario, isAdmin: isAdmin, isEmployee: isEmployee}, 'mysecretkey');
      res.json({ token , isAdmin, isEmployee, id_usuario });
    } else {  
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }

});

app.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
})

app.get("/datospersonales", async(req,res) => {
    try{
       
        const allDatos = await pool.query("SELECT * FROM datospersonales FULL OUTER JOIN clienteproveedor ON datospersonales.id_usuario = clienteproveedor.id_usuario FULL OUTER JOIN trayectorialaboral ON datospersonales.id_usuario = trayectorialaboral.id_usuario")
         res.json(allDatos.rows);
    } catch(err){
        console.error(err.message)
    }
})
app.get("/datospersonales/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const datos = await pool.query(
      "SELECT * FROM datospersonales FULL OUTER JOIN clienteproveedor ON datospersonales.id_usuario = clienteproveedor.id_usuario FULL OUTER JOIN trayectorialaboral ON datospersonales.id_usuario = trayectorialaboral.id_usuario WHERE datospersonales.id_usuario = $1",
      [id]
    );

    res.json(datos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


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
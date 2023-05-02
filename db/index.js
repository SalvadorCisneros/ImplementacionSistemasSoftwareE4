const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const { Connection } = require("pg")

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





app.listen(5000, () => {
    console.log("server has started on port 5000")
})
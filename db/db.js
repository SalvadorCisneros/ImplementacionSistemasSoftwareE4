import pkg from 'pg' 
const {Client} = pkg;

export const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "TerniumDB",
    password: "Rodabla5",
    port: 5432
})

client.connect(function(err) {
    if (err)throw (err);
    console.log("Conectado")

    
});
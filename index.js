
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.get('/usuarios', (req, res) => {
    let sql = 'SELECT * FROM usuarios';
    conectar().query(sql, (err,filas) => {
        // if(err) throw err;   
        if(err)
            res.send("Ocurrió el siguiente error: " + err.message);
        else
            res.send(filas);
    });
})

app.get('/usuario/:id', (req, res) => {
    var id = req.params.id;    
    var sql = 'SELECT * FROM usuarios WHERE id = ?';
    conectar().query(sql, [id], function (err, result) {
      // if (err) throw err;
        if(err)
            res.send("Ocurrió el siguiente error: " + err.message);
        else
            res.send(result);
    });    
})

app.delete('/usuario/:id', (req, res) =>{
    var id = req.params.id;    
    var sql = 'DELETE FROM usuarios WHERE id = ?';
    conectar().query(sql, [id], function (err, result) {
        if(err)
            res.send("Ocurrió el siguiente error: " + err.message);
        else
            res.send(result);
    });    
})

app.post('/usuario/update', (req, res) => {
    res.send('usuario actualizado...')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.post('usuario/create', (req, res) => {
    var id, nombre, apellido, username, email, password, isAdmin;
    var sql = `INSERT INTO usuarios VALUES (?,?,?,?,?,?,?);`
    conectar().query(sql,[id],[nombre],[apellido],[username],[email],[password],[isAdmin], function (err, result) {
        if(err)
            res.send("Ocurrió el siguiente error: " + err.message);
        else
            res.send(result);
    });  
    res.send('usuario agregado...')
})


function conectar(){
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "Whyth",
    password: "duoc12345",
    database : "RegistrApp"
    });

    con.connect(function(err) {
    if (err) throw err;
        console.log("Conectado!");
    });

    return con;
}
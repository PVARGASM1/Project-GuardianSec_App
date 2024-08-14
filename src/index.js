const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb')
const db = require('./dataBase/dataBase.js')

const app = express()
const port = 8080;

app.use(cors())

app.use(express.json())



app.get('/api/healthcheck', (req, res) => {
  res.status(201).send("It's working");
})

//Created-POST
// app.post('/users', (req, res) => {
//   try {
//     const usuario = req.body
//     res.status(201).json({message: "User created", data: usuario})
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

app.post('/users', async (req, res) => {
  try {
    const user = req.body; // Recibir los datos del usuario desde el cuerpo de la solicitud
    const result = collection.insertOne(user); // Insertar el usuario en la colección
    res.status(201).json({ message: "User created", data: result}); // Enviar la respuesta con los datos del usuario creado
  } catch (error) {
    res.status(400).send(error); // Manejar errores
  }
});


//Read- GET
app.get('/users', (req, res) => {
  try{
    const response = db.findAll();
    console.log(response);
    res.status(201).json({message: "Users found", data: response})
  } catch (error) { 
    res.status(400).json({message: error.message})
  }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
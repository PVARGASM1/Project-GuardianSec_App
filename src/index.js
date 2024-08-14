const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const addUser = require('./dataBase/dataBase.js')

const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())



app.get('/api/healthcheck', (req, res) => {
  res.status(201).send("It's working");
})

//Created-POST
app.post('/users', async (req, res) => {
  console.log(req.body);
  try {
    const { nombre, email, password } = req.body

    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    
    const newUser = await db.addUser(nombre, email, password)
    res.status(201).json({message: "User created", data: result})

    console.log(newUser)

  } catch (error) {
    res.status(400).send(error);
  }
});


//Read- GET
// app.get('/users', (req, res) => {
//   try{
//     const response = db.findAll();
//     console.log(response);
//     res.status(201).json({message: "Users found", data: response})
//   } catch (error) { 
//     res.status(400).json({message: error.message})
//   }
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const express = require('express')
const cors = require('cors')
const db = require('mongodb')


const app = express()
const port = 8080;

app.use(express.json()) //se puede recibir un body
app.use(cors())

//CRUD

//TEST
app.get('/api/healthcheck', (req, res) => {
    res.status(201).send("It's working");
  });

//Created-POST
app.post('/user', (req, res) => {
  try {
    const { body }  = req.body
    const response = db.insertOne({...body})
  
    res.status(201).json({message: "User created", data: response})
  } catch (error){
    res.status(400).json({message: error.message})
  }
})

// //Read- GET
// app.get('/users', (req, res) => {
//   try{
//     const response = db.findAll();
//     console.log(response);
//     res.status(201).json({message: "Users found", data: response})
//   } catch (error) { 
//     res.status(400).json({message: error.message})
//   }
// })

// //Update 
// app.update('/users', (req, res) => {
//   const body  = req.body
//   console.log(body)
// })

// //Delete
// app.delete('/users', (req, res) => {
//   const body  = req.body
//   console.log(body)
// })

  app.listen(port, () => {
    console.log(`It's server working ${port}`)
  })
const express = require('express')
const cors = require('cors')
const { connectDB } = require('./dataBase/dataBase');
const { ObjectId } = require('mongodb');

const app = express()
const port = 8080;
app.use(cors())
app.use(express.json())

let userCollection;

connectDB().then(collection => {
 userCollection = collection;
});


app.get('/api/healthcheck', (req, res) => {
  res.status(201).send("It's working");
})


//CRUD
//Created-POST
app.post('/users', async (req, res) => {
  try {
    const newUser = req.body;
    await userCollection.insertOne(newUser);

    res.status(201).json({message: "User created", data: newUser});
    console.log(newUser)  
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
});


//Read- GET
app.get('/users', async (req, res) => {
  try{
    const response = await userCollection.find({}).toArray();
    res.status(201).json({message: "Users found", data: response})
    console.log(response);
  } catch (error) { 
    res.status(400).json({message: error.message})
  }
})

//Read by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

     if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID no válido' });//verifica si es un Obj
    }

    const user = await userCollection.findOne({ _id: new ObjectId(id) });

    if (user) {
      res.status(201).json({message: "User found", data: user});
    }
  } catch (error) {
    res.status(400).json({ error: 'User not found' });
  }
});

//Update-PUT
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const result = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedUser }
    );
    res.status(201).json({message: "User updated", data: updatedUser });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el usuario' });
  }
});

//Datele 
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = req.params
    userCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(201).json({message: "User deleted", data: userDeleted });

  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el usuario'});
  }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

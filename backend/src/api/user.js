const express = require('express');
const { connectDB } = require('../dataBase/dataBase'); 
const { ObjectId } = require('mongodb');

const router = express.Router();

let userCollection;

connectDB().then(collection => {
 userCollection = collection;
});

router.get('/healthcheck', (req, res) => {
  res.status(201).send("It's working");
});

// Create (POST)
router.post('/users', async (req, res) => {
  try {
    const newUser = req.body;
    await userCollection.insertOne(newUser);
    res.status(201).json({message: "User created", data: newUser});
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
});

// Read (GET)
router.get('/users', async (req, res) => {
  try {
    const response = await userCollection.find({}).toArray();
    res.status(201).json({message: "Users found", data: response});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Read by ID (GET)
router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID no válido' });
    }

    const user = await userCollection.findOne({ _id: new ObjectId(id) });

    if (user) {
      res.status(201).json({message: "User found", data: user});
    } else {
      res.status(404).json({message: "User not found"});
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al buscar el usuario' });
  }
});

// Update (PUT)
router.put('api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const result = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedUser }
    );
    res.status(201).json({message: "User updated", data: updatedUser});
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el usuario' });
  }
});

// Delete (DELETE)
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await userCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(201).json({message: "User deleted"});
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el usuario' });
  }
});

module.exports = router;

const express = require('express');
const { connectDB } = require('../dataBase/dataBase'); // Ajusta la ruta si es necesario
const { ObjectId } = require('mongodb');

const router = express.Router();

let consultingCollection;

connectDB().then(collections => {
    consultingCollection = collections.consultingCollection;
  });
  
  // Health check para asegurarse de que la ruta funciona
  router.get('/healthcheck', (req, res) => {
    res.status(201).send("Consulting route is working");
  });
  
  // Create (POST)
  router.post('/consulting', async (req, res) => {
    try {
      const newConsulting = req.body;
      await consultingCollection.insertOne(newConsulting);
      res.status(201).json({message: "Consulting created", data: newConsulting});
    } catch (error) {
      res.status(401).json({ error: 'Error al crear consulting' });
    }
  });

  // Read (GET)
router.get('/consulting', async (req, res) => {
    try {
      const response = await consultingCollection.find({}).toArray();
      res.status(201).json({message: "Consulting found", data: response});
    } catch (error) {
      res.status(401).json({message: error.message});
    }
  });

  router.get('/consulting/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        return res.status(401).json({ error: 'ID no válido' });
      }
  
      const consulting = await consultingCollection.findOne({ _id: new ObjectId(id) });
  
      if (consulting) {
        res.status(201).json({message: "Consulting found", data: consulting});
      } else {
        res.status(401).json({message: "Consulting not found"});
      }
    } catch (error) {
      res.status(401).json({ error: 'Error al buscar consulting' });
    }
  });

  // Update (PUT)
router.put('/consulting/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedConsulting = req.body;
    const result = await consultingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedConsulting }
    );
    res.status(201).json({message: "Consulting updated", data: updatedConsulting});
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar consulting' });
  }
});

  module.exports = router;
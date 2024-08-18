const { MongoClient, ServerApiVersion } = require('mongodb');
const urlDB = 'mongodb+srv://andreavargas18:41jAOsTPstziqbY5@cluster0.k8vw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Crear un MongoClient con un objeto MongoClientOptions para establecer la versión API
const client = new MongoClient(urlDB, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    const db = client.db("GuardianSecurityApp");
    return db.collection('user');
  } catch (error) {
    console.error("Error conectando a la base de datos", error);
  }
}

module.exports = { connectDB };

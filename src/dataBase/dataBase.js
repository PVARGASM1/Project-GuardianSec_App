const { MongoClient, ServerApiVersion } = require('mongodb');
const urlDB = 'mongodb+srv://andreavargas18:41jAOsTPstziqbY5@cluster0.k8vw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(urlDB, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  

async function addUser(nombre, email, password) {
  try {
    await client.connect();// Connect the client to the server
    const db = client.db("GuardianSecurityApp");
    const userCollection = db.collection('user');

    const usuario = { nombre, email, password }

    const insertUser = await userCollection.insertOne({ usuario});
    return insertUser // Retorna el usuario insertado
   
  } finally {
    // Ensures that the client will close when you finish/error
     await client.close();
  }
}
addUser().catch(console.dir);

module.exports = addUser();
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


async function run() {
  try {
    
    await client.connect();// Connect the client to the server
    const db = client.db("GuardianSecurityApp");
    const collection = db.collection('user');
    const insertResult = await collection.insertOne({ nombre: 'Angel Moreno' , email: 'am@test.com', password: "abc123" });
    console.log(insertResult);
  } finally {
    // Ensures that the client will close when you finish/error
     client.close();
  }
}
run().catch(console.dir);
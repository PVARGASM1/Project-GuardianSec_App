const express = require('express')
const cors = require('cors')


const app = express()
const port = 8080;
app.use(cors())


//CRUD

app.get('/api/healthcheck', (req, res) => {
    res.status(201).send("It's working");
  });

  app.listen(port, () => {
    console.log(`It's server working ${port}`)
  })
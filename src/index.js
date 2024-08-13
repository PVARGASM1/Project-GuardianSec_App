const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 8080;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())



app.get('/api/healthcheck', (req, res) => {
  res.status(201).send("It's working");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
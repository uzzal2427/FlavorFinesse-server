const express = require('express')
const app = express()
const chef = require('./Data/chef.json')
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef', (req,res)=>{
    res.send(chef);
})

app.get('/chef/:id', (req,res)=>{
  const id = req.params.id;
  const singleChef = chef.find((c)=> c.unique_id == id);
  res.send(singleChef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const chef = require('./Data/chef.json')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef', (req,res)=>{
    res.send(chef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
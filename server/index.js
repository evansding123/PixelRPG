const express = require('express')
const path = require('path')
const app = express()
const port = 3005

app.use(express.json());
app.use(express.static('./dist'));


app.get('/summoned', (req, res) => {

    res.sendStatus(200);

})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
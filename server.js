require("dotenv").config()
const express = require('express')
const app = express()
const routes = require('./routes/index.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))

app.use('/', routes)

/*
app.get('/' ,(req,res) =>
{
    res.send('Hello from Movie Storm')
})
*/
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Time to rent movies on port ' + PORT)
})
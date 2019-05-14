const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/' ,(req,res) =>
{
    res.send('Hello from Movie Storm')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Time to rent movies on port ' + PORT)
})
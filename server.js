const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.post('/qwe', (req, res) =>{
    console.log(req.body)
    res.send({
        mess: 'hello'
    })
})
app.listen(PORT, ()=> {
    console.log("Server is up on port " + PORT)
})
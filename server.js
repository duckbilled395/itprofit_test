const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.post('/qwe', (req, res) =>{
    console.log('body',req.body)
    if (!req.body.name) {
        res.send({
            err: 'NO NAME'
        })
    }
    else {
        res.headers = {
            'Content-Type': '*/*'
        }
        res.send({
            status: 'success',
            id: 'qwe'
        })
        res.status(400).json()
    }

})
app.listen(PORT, ()=> {
    console.log("Server is up on port " + PORT)
})

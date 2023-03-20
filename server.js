const express = require('express')
const app = express()
const PORT = 5000
//const mongoose = require('mongoose')
//const db = require('./app/config/db.config')
const db = require('./app/models')


app.use(express.json())

app.use(express.urlencoded({ extended:true }))


db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect di i sus')
})
.catch(err => {
    console.log('mai connect i sus',err)
})

// app.get('/', (req,res) => {
//     res.send('Default route')

// })

require ('./app/routes/student.routes')(app)

app.listen(PORT,() => console.log(`Server satart on port  ${PORT}`))
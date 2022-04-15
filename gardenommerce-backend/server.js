const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bookRouter = require('./api/routes/PlantRouter')

const app = express()

mongoose.connect('mongodb://localhost:27017/garden', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
    .then(r => console.log("Connection ok"))
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api', bookRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 4200
app.listen(PORT, () => {
    console.log('The app is running on ' + PORT)
})
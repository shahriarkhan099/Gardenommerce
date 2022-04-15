const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlantSchema = new Schema({
    plantName: {
        type: String,
        required: true
    },
    plantType: {
        type: String,
        required: true
    },
    plantPrice: {
        type: Number,
        required: true
    },
    plantImage: {
        type: String
    }

})

const PlantModel = mongoose.model('plantModel', PlantSchema)

module.exports = PlantModel
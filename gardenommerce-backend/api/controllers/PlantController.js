const PlantModel = require('../models/PlantModel')

const addPlant = (req, res) => {
    console.log(req.body)
    let newPlant = new PlantModel({
        plantName: req.body.plantName,
        plantAuthor: req.body.plantAuthor,
        plantPrice: req.body.plantPrice,
        plantImage: req.body.plantImage
    })

    newPlant.save()
        .then(result => {
            res.status(201).json({
                massage: 'Plant Added Successful',
                user: result
            })
        })
        .catch(error => {
            res.json(error)
        })

}

const getPlants = (req, res) => {
    let name = req.query.name
    console.log(req.query)

    res.json(ok)

}


const getAllPlants = (req, res) => {
    let name = req.query.name
    console.log(req.query)
    if(name){
        PlantModel.find({plantName: {$regex: name, $options: 'i'}})
            .then(plants => {
                res.status(200).json({
                    massage: 'Some Plants',
                    plants
                })
            })
            .catch(error => {
                res.json(error)
            })
    }
    else {
        PlantModel.find()
            .then(plants => {
                res.status(200).json({
                    massage: 'All Plants',
                    plants
                })
            })
            .catch(error => {
                res.json(error)
            })
    }

}

const deletePlant = (req, res) => {
    let plantId = req.params.plantId

    PlantModel.findByIdAndRemove(plantId)
        .then(result => {
            res.status(200).json({
                massage: 'Plant Deleted',
                result
            })
        })
        .catch(error => {
            res.json(error)
        })

}

module.exports = {
    addPlant,
    getAllPlants,
    deletePlant,
    getPlants
}


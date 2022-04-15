const express = require('express');
const router = express.Router();

const plantController = require('../controllers/PlantController')
const orderController = require('../controllers/OrderController')

router.post('/books', plantController.addPlant)

router.get('/books', plantController.getAllPlants)

router.get('/book', plantController.getPlants)

router.delete('/books/:plantId', plantController.deletePlant)

router.post('/orders', orderController.addOrder)

router.get('/orders', orderController.getAllOrders)

module.exports = router
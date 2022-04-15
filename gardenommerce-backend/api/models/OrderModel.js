const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    orderDate: {
      type: String
    },
    plantName: {
        type: String,
        required: true
    },
    plantAuthor: {
        type: String,
        required: true
    },
    plantPrice: {
        type: Number,
        required: true
    }

})

const OrderModel = mongoose.model('orderModel', OrderSchema)

module.exports = OrderModel
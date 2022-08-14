const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    flight_no: {
        type: Number,
        unique: true
    },
    origin: {
        type: String,
        required: true,
        trim: true,
    },
    destination: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    arrivalTime: {
        type: String,
        required: true,
        trim: true,
    },
    departureTime: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stops: [{
        type: String
    }]
})



const Flight = mongoose.model('Flight', flightSchema)  
module.exports = Flight
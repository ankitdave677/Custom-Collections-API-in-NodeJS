//Student Name: Ankit Dave
// Student Number: 8959634


const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  placesToTravel: { type: [String], required: true },
  nearbyAirport: { type: String, required: true },
  estimatedTravelDate: { type: Date, required: true }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;

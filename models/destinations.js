// Student Name: Ankit Dave
// Student Number: 8959634

//import the mongoose library
const mongoose = require('mongoose');

// Define a new schema for the Destination collection
const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  placesToTravel: { type: [String], required: true },
  nearbyAirport: { type: String, required: true },
  estimatedTravelDate: { type: Date, required: true }
});

// Create a model from the schema
const Destination = mongoose.model('Destination', destinationSchema);

// Export the Destination model
module.exports = Destination;

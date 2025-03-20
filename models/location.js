const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,  
    //chnage it
});

module.exports = mongoose.model('location', LocationSchema);

const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,
});

module.exports = mongoose.model('location', LocationSchema);

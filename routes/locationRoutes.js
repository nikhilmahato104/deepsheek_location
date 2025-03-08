const express = require('express');
const router = express.Router();
const Location = require('../models/location');

router.get('/', async (req, res) => {
    try {
        const locations = await Location.find();
        res.render('index', { locations });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;

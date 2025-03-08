require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

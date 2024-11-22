const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('Could not connect to MongoDB', err));